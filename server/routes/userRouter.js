import express from "express"
import { addNewAdmin, addNewAgent, clientRegister, getAllAgents, getClientDetails, login, logoutAdmin, logoutClient } from "../controller/userController.js"
import { isAdminAuthenticated,  } from "../middlewares/auth.js"

const router = express.Router()

router.post("/client/register", clientRegister)
router.post("/login",login)
router.post("/admin/addnew", isAdminAuthenticated,  addNewAdmin)
router.get("/agents", getAllAgents)
router.get("/admin/me" , isAdminAuthenticated , getClientDetails)
router.get("/client/me", getClientDetails)
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin)
router.get("/client/logout",  logoutClient)
router.post("/agent/addnew", isAdminAuthenticated,  addNewAgent)
export default router