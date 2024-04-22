import { Router } from "express";
import {
    addData,
    updateData,
    getCounts
} from '../controllers/controller.js';

const router = Router();

// Route for adding data
router.route('/api/data/add').post(addData);

// Route for updating data
router.route('/api/data/update/:id').put(updateData);

// Route for getting counts
router.route('/api/data/count').get(getCounts);

export default router;
