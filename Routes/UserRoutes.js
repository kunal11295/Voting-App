import express from "express";
import { Login, login_html, register, register_html,voterpage_html } from "../Controller/UserController.js";

var router = express.Router()

router.get('/Voterpage',voterpage_html)
router.get('/login1',login_html)
router.get('/register1',register_html)
router.post('/register',register)
router.post('/Login',Login)


export default router;