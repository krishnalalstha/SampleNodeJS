import Router from 'express';
import swaggerSpec from '../../utils/swagger';
import userRoutes from './user.routes';
import companyRoutes from './company.routes';

const router = Router();

router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

router.get('/', (req, res) => {
  res.json({
    test: 'hello nepal',
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/user', userRoutes);
router.use('/company', companyRoutes);

export default router;
