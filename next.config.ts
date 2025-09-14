import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // Add allowed quality values
        qualities: [50, 75, 80, 90, 100],
        // optional: domains if you use external images
        // domains: ['example.com'],
    },
};

export default nextConfig;
