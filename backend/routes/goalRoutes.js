import express from 'express';
import router from express.Router();
import { getGoals, setGoal, updateGoal, deleteGoal } from '../controllers/goalController';

import { protect } from '../middleware/authMiddleware';

router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;