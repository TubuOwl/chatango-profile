let history = [];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const entry = req.body;

    // Basic validation
    if (!entry || !entry.username || !entry.timestamp) {
      return res.status(400).json({ error: "Invalid data" });
    }

    history.push(entry); // Store in memory (or database if needed)
    return res.status(200).json({ message: "History saved", data: entry });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
