import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    rewrites: async () => {
        return [
          {
            source: '/api/main.py',
            destination:
              process.env.NODE_ENV === 'development'
                ? 'http://127.0.0.1:5000/api/:path*'
                : '/api/',
          },
        ]
      },
};

export default nextConfig;
