import { Router } from 'express';
import { userController } from '../modules';

const router = Router();

router.get('/', userController.fetchAll);

export default router;
