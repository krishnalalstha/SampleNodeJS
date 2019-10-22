import { Router } from 'express';

import { companyController } from '../modules';
import { checkIfCompanyExists, companyValidator } from '../validators/companyValidator';


const router = Router();

/**
 * GET /api/companies
 */
router.get('/', companyController.fetchAll);

/**
 * POST /api/create
 */
router.post('/create', companyValidator, checkIfCompanyExists, companyController.create);


export default router;
