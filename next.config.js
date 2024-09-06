/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "github.com",
			},
			{
				hostname: "raw.githubusercontent.com",
			},
			{
				hostname: "avatars.githubusercontent.com",
			},
			{
				hostname: "camo.githubusercontent.com",
			},
			{
				hostname: "cdn.jsdelivr.net",
			},
			{
				hostname: "miro.medium.com",
			},
			{
				hostname: "seeklogo.com",
			},
			{
				hostname: "upload.wikimedia.org",
			},
		],
	},
};

module.exports = nextConfig;
