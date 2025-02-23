// pages/team/index.tsx
import HamburgerMenu from '@/components/HamburgerMenu';
import {Linkedin, Github } from 'lucide-react';

const teamMembers = [
    {
        name: 'David Kan',
        description: 'Full-stack developer with a focus in ML',
        image: 'images/david.png',
        socials: {
            linkedin: 'https://www.linkedin.com/in/david-kan-da/',
            github: 'https://github.com/StreetLamp05',
        },
    },
    {
        name: 'Jasmine Nguyen',
        description: 'Data science, manipulation, and visualization',
        image: 'images/jasmine.png',
        socials: {
            linkedin: 'https://www.linkedin.com/in/jasnquyen/',
            github: 'https://github.com/jasnquyen',
        },
    },
    {
        name: 'Kevin Niu',
        description: 'Distributed systems engineer and UI/UX',
        image: 'images/kevin.png',
        socials: {
            linkedin: 'https://www.linkedin.com/in/kevinsniu/',
            github: 'https://github.com/kevinsniu',
        },
    },
];

export default function Team() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6 text-center">
            <HamburgerMenu />

            {/* Logo */}
            <img
                src="\logo_white.png"
                alt="Logo"
                className="w-32 h-auto mx-auto mb-4"
            />

            <h1 className="text-4xl font-bold text-white">Our Team</h1>
            <p className="text-md text-white">
                Meet the amazing team behind HealthWise. Dedicated to bringing you the best healthcare insights.
            </p>

            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {teamMembers.map((member) => (
                    <div key={member.name} className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white"
                        />
                        <h2 className="mt-4 text-xl font-semibold text-white">{member.name}</h2>
                        <p className="text-sm text-white">{member.description}</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="text-white hover:text-blue-600 w-5 h-5 transition-colors duration-300" />
                            </a>
                            <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                                <Github className="text-white hover:text-gray-400 w-5 h-5 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
