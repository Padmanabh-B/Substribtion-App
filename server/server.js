require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const { readdirSync } = require('fs') //Core nodejs module


const morgan = require('morgan')

const app = express();

//db
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.log("DB Connection Error", error);

})

//Middleware
app.use(express.json({ limit: "5mb" }));
app.use(cors({
    origin: [process.env.CLIENT_URL],
}))
//autoload routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
})



