import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthInteractor } from "../interactors/auth.interactor";
import { AuthService } from "../application/service/auth.service";

const router = Router();

const service = new AuthService();
const interactor = new AuthInteractor(service);
const authController = new AuthController(interactor);


router.route("/generate-token").post(authController.generateToken)
router.route("/verify-token").post(authController.verifyToken)


export default router;

