from fastapi import FastAPI
import pandas as pd
import xgboost as xgb
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Load trained XGBoost model
model = xgb.XGBRegressor()
model.load_model("ili_xgboost_optimized_optimized.json")  # Ensure you save your trained model

# Initialize FastAPI
app = FastAPI(title="ILI Forecasting API", description="Predict future ILI totals per state.")
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
        "population": data.population,
        "median_income": data.median_income,
        "ili_lag_1": data.ili_lag_1,
        "ili_lag_2": data.ili_lag_2,
        "ili_lag_3": data.ili_lag_3,
        "ili_lag_4": data.ili_lag_4,
        "ili_rolling_mean": data.ili_rolling_mean,
        "week": data.week
    }])

    # Make prediction & convert to Python float
    prediction = float(model.predict(input_data)[0])  # 🔹 Convert NumPy float to Python float

    return {
        "state": data.state,
        "predicted_ILI_total": round(prediction, 2)  # 🔹 Ensure response is JSON-serializable
    }
