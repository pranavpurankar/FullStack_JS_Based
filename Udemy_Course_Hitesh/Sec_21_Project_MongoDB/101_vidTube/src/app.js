import express from "express";
import cors from "cors"

const app = express();

// CORS: Who should be able to talk to your database.
// Cross Origin 

app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true,
    })
)

// Common middleware
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true, limit:"16kb"
}))
app.use(express.static("public"))

export { app }