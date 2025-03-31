[![Video Thumbnail](https://img.youtube.com/vi/FfuW5zOT2xo/0.jpg)](https://www.youtube.com/watch?v=FfuW5zOT2xo)


## Inspiration
In a world where seasonal flu outbreaks can strain healthcare systems and disrupt daily life, staying one step ahead can make all the difference. HealthWise empowers communities by predicting future influenza-like illness (ILI) prevalence across the United States. By harnessing the power of machine learning and leveraging historical flu trends alongside socio-economic data, HealthWise forecasts ILI rates with remarkable accuracy. These insights are visualized through dynamic heat maps, helping users identify high-risk areas at a glance and take proactive measures to protect their health and well-being. Our mission is simple yet powerful: to turn data into action, safeguarding communities before illness strikes.

## What it does
HealthWise is built on a foundation of robust data sources and advanced machine learning techniques:

## Historical ILI Data sourced from the CDC (CDC FluView), offering a comprehensive view of past flu trends.
Census Data including population demographics and median income, providing essential socio-economic context for more accurate predictions.
Extreme Gradient Boosting (XGBoost) is the engine powering our predictions. By leveraging this powerful algorithm and optimizing it with L1/L2 regularization, our model achieves exceptional accuracy while preventing overfitting. We also utilize feature importance ranking to reveal key drivers of flu trends, such as population density and historical flu patterns.
HealthWise achieves an impressive R² Score of 0.9575, reflecting its high accuracy and reliability in forecasting future ILI rates.

## How we built it
Our solution is powered by an Extreme Gradient Boosting Influenza Prediction Algorithm. Here’s how we did it:

Data Integration: We combined historical influenza data (% unweighted Influenza-like Illnesses) with census data (population, median income) to create a rich dataset for training our model.
Prediction Engine: Utilizing XGBoost, a cutting-edge machine learning algorithm known for its speed and performance, we generated state-level predictions for future ILI rates. XGBoost’s ability to rank feature importance enhances our model's interpretability, making predictions more transparent and actionable.
Visual Insights: The predicted ILI rates are then mapped onto an interactive heat map, providing users with a clear, real-time view of flu risk across the country.
Why Extreme Gradient Boosting? We chose XGBoost because of its exceptional performance in complex datasets, speed, and scalability. Unlike traditional models, XGBoost optimizes through gradient boosting, combining multiple weak learners (decision trees) to form a robust predictive model. Its built-in L1 and L2 regularization enhances generalization, preventing overfitting while maintaining high accuracy. Additionally, its feature importance ranking provides valuable insights into the key factors driving flu trends, making predictions more understandable and actionable.

## What is Influenza-like Illness (ILI)? Influenza-like illness (ILI) is a metric used to monitor flu-like symptoms in a population. It represents the percentage of outpatient visits where patients show ILI symptoms, without adjusting for population size or other variables. For more details, visit the CDC Overview.

## Challenges we ran into
Data Gathering: Due to strict privacy regulations like HIPAA, obtaining detailed datasets for various diseases (e.g., Norovirus) was challenging. Additionally, inconsistent data formats and varying levels of detail across public health datasets required extensive standardization.

Data Cleaning & Preprocessing: Historical influenza data needed thorough cleaning and transformation to be effectively merged with census data, ensuring a cohesive and reliable training dataset.

## Accomplishments that we're proud of
High-Performance Model: Successfully developed a highly accurate flu prediction model using Extreme Gradient Boosting, achieving an R² Score of 0.9575.

Hyperparameter Optimization: Fine-tuned model parameters for optimal performance and generalization.

Real-Time Visualizations: Created an interactive, real-time heat map using D3.js, designed for a mobile-centric web application.

User-Centric Features: Integrated intuitive features for enhanced user experience, including:

Geolocation for automatic state detection.
Smart Search Bar with auto-complete functionality.
Mobile-First Design ensuring seamless usability on all devices.
Unified UI/UX Paradigm delivering a cohesive and engaging experience across the platform.
## What we learned
This project reinforced just how crucial data quality is. We initially assumed that merging datasets would be straightforward, but inconsistencies, missing values, and different formats made it a challenge. Cleaning and standardizing the data took significant effort, and we quickly realized that even the best machine learning models won’t perform well without high-quality input. Preprocessing was just as important as model selection.

Working with Extreme Gradient Boosting (XGBoost) gave us a deeper appreciation for its power and efficiency. It not only provided accurate predictions but also highlighted key features that influenced flu trends. Fine-tuning hyperparameters made a significant difference, showing us that model optimization is a skill in itself. Regularization techniques helped prevent overfitting, reinforcing the importance of balancing model complexity with generalization.

Implementing geolocation in Next.js was more complicated than expected. Since Next.js doesn’t have built-in geolocation support, we used the Navigator API to retrieve latitude and longitude, then relied on an external geocoding API to convert those coordinates into a state name. Handling errors—such as users blocking location access—was a key part of making the feature work smoothly. This was a reminder that real-world applications need to account for all possible user interactions, not just ideal scenarios.

Creating datasets turned out to be one of the most time-consuming parts of the project. Combining historical flu data with socio-economic indicators required careful alignment, normalization, and feature engineering. We had to ensure that all variables were on a comparable scale and that missing values didn’t introduce bias. This experience reinforced the idea that machine learning isn’t just about choosing the right model—it’s about building the right dataset first.

## What's next for HealthWise
With HealthWise, we're not just predicting flu trends—we’re empowering communities to make informed health decisions. Our vision goes beyond influenza; we aim to create a dynamic platform that proactively safeguards public health. Here’s how we plan to evolve:

Expanding Data Sources: To enhance prediction accuracy and provide a more comprehensive view of public health risks, we plan to integrate additional data sources, including:

Weather Data: Temperature, humidity, and seasonal changes have a significant impact on flu transmission rates. By incorporating real-time weather data, we can refine our predictions to reflect environmental influences.
Mobility Trends: Analyzing population movement patterns (e.g., commuting habits, travel data) can provide insights into disease spread dynamics, enabling more localized risk assessments. Vaccination Rates: Tracking vaccination coverage will help us understand population immunity levels, improving predictive accuracy for future outbreaks.
Social and Behavioral Factors: Incorporating data on public health behaviors (e.g., mask usage, social distancing practices) and policy measures will allow us to account for human interventions that influence disease spread.
Broadening Disease Coverage: Beyond influenza-like illnesses, we aim to expand the platform to track and predict other infectious diseases, such as RSV, Norovirus, and emerging respiratory viruses. This will enhance public health preparedness and resilience.
Advanced Machine Learning Techniques: We are continuously exploring state-of-the-art models, including deep learning approaches, to improve prediction accuracy and adaptability to evolving health trends.
HealthWise is more than a prediction tool; it’s a step towards a healthier, more proactive future. By leveraging advanced machine learning and expanding our data ecosystem, we’re transforming public health forecasting into a powerful preventive tool.

HealthWise: Predicting Tomorrow's Flu, Protecting Today’s Health.
