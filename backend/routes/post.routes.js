import { Router } from "express";
import {getReviews, createReview, updateReview, deleteReview, getReview} from '../controllers/post.controllers.js';

const router = Router();

router.get('/movies', getReviews);
router.post('/movies', createReview);
router.put('/movies/:id', updateReview);
router.delete('/movies/:id', deleteReview);
router.get('/movies/:id', getReview);

export default router;