from fastapi import FastAPI
import pandas as pd
import xgboost as xgb
import numpy as np
from pydantic import BaseModel

# Load trained XGBoost model
model = xgb.XGBRegressor()
model.load_model("ili_xgboost_optimized_optimized.json")  # Ensure you save your trained model

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
