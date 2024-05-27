import express from "express"
import {agentRegister} from "../controller/agentregisterController.js"

const router = express.Router()


router.post("/agentregister", agentRegister)


export default router