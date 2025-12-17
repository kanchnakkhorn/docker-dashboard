const express = require("express");
const cors = require("cors");
const docker = require("./docker/client");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/v1/containers", async (req, res) => {
  try {
    const containers = await docker.listContainers({ all: true });

    res.json(containers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to list containers" });
  }
});

app.listen(PORT, () => {
  console.log(`Docker agent running on http://localhost:${PORT}`);
});
