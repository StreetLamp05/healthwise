from fastapi import FastAPI
import pandas as pd
import xgboost as xgb
import numpy as np
from pydantic import BaseModel
import os
import csv

# Load trained XGBoost model
model = xgb.XGBRegressor()
model.load_model("ili_xgboost_optimized_optimized.json")  # Ensure you save your trained model

# Load the ILINet data
data_path = os.path.join(os.path.dirname(__file__), 'ILINet.csv')
ili_data = pd.read_csv(data_path)

# Initialize FastAPI
app = FastAPI(title="ILI Forecasting API", description="Predict future ILI totals per state.")

# Define input schema
class ILIRequest(BaseModel):
    state: str
    population: int
    median_income: int
    week: int
    ili_lag_1: float
    ili_lag_2: float
    ili_lag_3: float
    ili_lag_4: float
    ili_rolling_mean: float

@app.post("/predict")
def predict_ili(data: ILIRequest):
    # Create DataFrame for model input
    input_data = pd.DataFrame([{
        "Population": data.population,
        "Median_Income": data.median_income,
        "ILI_LAG_1": data.ili_lag_1,
        "ILI_LAG_2": data.ili_lag_2,
        "ILI_LAG_3": data.ili_lag_3,
        "ILI_LAG_4": data.ili_lag_4,
        "ILI_ROLLING_MEAN": data.ili_rolling_mean,
        "WEEK": data.week
    }])

    # Make prediction & convert to Python float
    prediction = float(model.predict(input_data)[0])  # 🔹 Convert NumPy float to Python float

    return {
        "state": data.state,
        "predicted_ILI_total": round(prediction, 2)  # 🔹 Ensure response is JSON-serializable
    }

@app.get("/flu-risk/{state}")
def get_flu_risk(state: str):
    # Calculate the flu risk score based on the data from ILINet.csv
    state_data = ili_data[ili_data['REGION'] == state]
    if state_data.empty:
        return {"state": state, "flu_risk_score": 50}  # Default score if no data available

    # Example calculation: average %UNWEIGHTED ILI for the state
    avg_ili = state_data['%UNWEIGHTED ILI'].mean()
    flu_risk_score = min(max(avg_ili * 10, 0), 100)  # Scale to 0-100 range

    return {"state": state, "flu_risk_score": round(flu_risk_score, 2)}

def read_influenza_data(filepath):
    with open(filepath, mode='r') as file:
        csv_reader = csv.DictReader(file)
        data = [row for row in csv_reader]
    return data

def get_flu_risk_by_state(data, state):
    state_data = [row for row in data if row['REGION'] == state]
    return state_data

if __name__ == "__main__":
    filepath = 'ILINet.csv'
    data = read_influenza_data(filepath)
    state = 'Georgia'
    state_data = get_flu_risk_by_state(data, state)
    for row in state_data:
        print(row)
