import { Router } from 'express';
import pruductRouter from './product-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/product', pruductRouter);


// Export default.
export default baseRouter;
