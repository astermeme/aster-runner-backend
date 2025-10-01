if (error) return res.status(500).json({ error: error.message });

  let csv = "id,name,score,created_at\n";
  data.forEach(row => {
    csv += `${row.id},${row.name},${row.score},${row.created_at}\n`;
  });

  res.header("Content-Type", "text/csv");
  res.attachment("scores.csv");
  res.send(csv);
});

// Health check
app.get("/", (req, res) => {
  res.send("Aster Runner Backend is running 🚀");
});

// Start local dev (Vercel will ignore, uses serverless)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});