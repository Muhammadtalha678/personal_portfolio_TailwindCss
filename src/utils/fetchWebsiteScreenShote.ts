

// utils/fetchWebsiteScreenshot.ts

const API_KEY = 'GSMVD46-HE2MGFD-Q96V01S-Z05DRXH'; // Replace with your ScreenshotAPI key
const API_URL = 'https://api.screenshotapi.net/v1/screenshot';

export async function fetchWebsiteScreenshot(url: string) {
    try {
        const response = await fetch(`https://api.screenshotapi.net/v1/screenshot?url=${url}&token=GSMVD46-HE2MGFD-Q96V01S-Z05DRXH`);

        console.log("API Response:", response); // 👀 Check API response

        if (!response.ok) {
            console.error(`Error fetching screenshot: ${response.status} - ${response.statusText}`);
            return null;
        }

        const contentType = response.headers.get('Content-Type');
        console.log("Content-Type:", contentType); // 👀 Check content type

        if (!contentType || !contentType.includes('application/json')) {
            console.error("Invalid JSON response. HTML might be returned.");
            return null;
        }

        const data = await response.json();
        console.log("API Data:", data); // 👀 Check JSON response

        return data.screenshotUrl || null;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}


