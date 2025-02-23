export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests allowed" });
    }

    try {
        // Send request to Flask API
        const response = await fetch("http://localhost:8000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error calling Flask API:", error);
        res.status(500).json({ error: "Failed to fetch data from Flask API" });
    }
}
