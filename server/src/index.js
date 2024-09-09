// Change ONLY if you changed the URL port from client. Make to be the same link
const WEB_SITE_URL = "http://localhost:5173";

// IGNORE
const express = require("express");
require("express-async-errors");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const corsOptions = {
  origin: [WEB_SITE_URL],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(8080, () =>
  console.log("🔥 Server started at http://localhost:8080")
);
