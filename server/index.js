// index.js
const express = require("express");
const cors = require('cors');
const usersRoutes = require("./src/routes/routes");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/", usersRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
