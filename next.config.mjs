/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  output: "export",
  basePath: isDev ? "" : "/learning-cat-website",
  assetPrefix: isDev ? "" : "/learning-cat-website/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
