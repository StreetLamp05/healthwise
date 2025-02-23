// pages/about/index.tsx
import HamburgerMenu from '@/components/HamburgerMenu';

export default function About() {
    return (
        <div className="max-w-md mx-auto p-6 space-y-6 text-center">
            <HamburgerMenu />
            <h1 className="text-4xl font-bold text-white">About the Data</h1>
            <p className="text-md text-white">
                Welcome to HealthWise. Your trusted source for accurate weather and health forecasts.
            </p>
        </div>
    );
}
