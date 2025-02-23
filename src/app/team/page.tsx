// pages/team/index.tsx
import HamburgerMenu from '@/components/HamburgerMenu';

export default function Team() {
    return (
        <div className="max-w-md mx-auto p-6 space-y-6 text-center">
            <HamburgerMenu />
            <h1 className="text-4xl font-bold text-white">Our Team</h1>
            <p className="text-md text-white">
                Meet the amazing team behind HealthWise. Dedicated to bringing you the best weather insights.
            </p>
        </div>
    );
}
