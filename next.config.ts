// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
  allowedDevOrigins: ["http://localhost:3000"], // ローカル開発時のCORS対応
};

export default nextConfig;
