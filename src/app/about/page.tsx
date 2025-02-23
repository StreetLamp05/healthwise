// pages/about/index.tsx
import HamburgerMenu from '@/components/HamburgerMenu';

export default function About() {
    return (
        <div className="max-w-md mx-auto p-6 space-y-6 text-center">
            <HamburgerMenu />
            <h1 className="text-4xl font-bold text-white">About HealthWise</h1>
            {/* Inspiration Section */}
            <div className="bg-white bg-opacity-15 rounded-2xl p-4 backdrop-blur-md shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-sm leading-relaxed">
                    In a world where seasonal flu outbreaks can strain healthcare systems and disrupt daily life, staying one step ahead can make all the difference. HealthWise empowers communities by predicting future influenza-like illness (ILI) prevalence across the United States.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                    By harnessing the power of machine learning and leveraging historical flu trends alongside socio-economic data, HealthWise forecasts ILI rates with remarkable accuracy. These insights are visualized through dynamic heat maps, helping users identify high-risk areas at a glance and take proactive measures to protect their health and well-being.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                    Our mission is simple yet powerful: to turn data into action, safeguarding communities before illness strikes.
                </p>
            </div>

            {/* What it does Section */}
            <div className="bg-white bg-opacity-15 rounded-2xl p-4 backdrop-blur-md shadow-md">
                <h2 className="text-2xl font-semibold mb-2">The Science</h2>
                <p className="text-sm leading-relaxed">
                    HealthWise is built on a foundation of robust data sources and advanced machine learning techniques:
                </p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                        <span className="font-semibold">Historical ILI Data:</span> Sourced from the CDC (CDC FluView), offering a comprehensive view of past flu trends.
                    </li>
                    <li>
                        <span className="font-semibold">Census Data:</span> Including population demographics and median income, providing essential socio-economic context for more accurate predictions.
                    </li>
                    <li>
                        <span className="font-semibold">Extreme Gradient Boosting (XGBoost):</span> The engine powering our predictions. By leveraging this powerful algorithm and optimizing it with L1/L2 regularization, our model achieves exceptional accuracy while preventing overfitting. We also utilize feature importance ranking to reveal key drivers of flu trends, such as population density and historical flu patterns.
                    </li>
                </ul>
                <p className="text-sm leading-relaxed mt-2">
                    HealthWise achieves an impressive R² Score of 0.9575, reflecting its high accuracy and reliability in forecasting future ILI rates.
                </p>
            </div>
        </div>
    );
}
