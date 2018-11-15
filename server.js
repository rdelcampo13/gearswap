// ====================== Dependencies ======================
const express       = require("express");
const app           = express();
const PORT          = process.env.PORT || 3001;
const path          = require('path');


// Serve up static assets
app.use(express.static("client/build"));


// If no API routes are hit, send the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ====================== Launch ======================
// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
