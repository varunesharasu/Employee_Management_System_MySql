require('dotenv').config();

const express = require('express');
const { testConnection } = require('./db');

const app = express();
app.use(express.json());

app.get('/health', async (req, res) => {
  try {
    const ok = await testConnection();
    res.status(200).json({ ok, mysql: ok ? 'connected' : 'unknown' });
  } catch (err) {
    res.status(500).json({ ok: false, mysql: 'error', error: err.message });
  }
});

const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${port}`);
});
