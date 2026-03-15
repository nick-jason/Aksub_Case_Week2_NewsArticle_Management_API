import express from 'express'
import dotenv from 'dotenv'
import routes from "./src/routes/index.js"
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notfound.js';

const PORT = process.env.PORT || 8000;
dotenv.config()
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (_req, res) => {
    res.json({message: "News Article Management API"})
})

app.use(logger);
app.set("view engine", "ejs")

app.use("/api", routes)

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})