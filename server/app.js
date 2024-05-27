import express from "express"
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js"
import messageRouter from "./routes/messageRouter.js"
import userRouter from "./routes/userRouter.js"
import agentregisterRouter from "./routes/agentregisterRouter.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import fileUpload from "express-fileupload"
import {errorMiddleware} from "./middlewares/errorMiddleware.js"
const app = express()

dotenv.config({path: "./config/config.env"})



app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST","GET", "PUT", "DELETE"],
    credentials:true,

}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/agent", agentregisterRouter);



dbConnection();


app.use(errorMiddleware);
export default app;