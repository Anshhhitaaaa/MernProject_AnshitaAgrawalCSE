import express from 'express';
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
  addCourseRating
} from '../controllers/courses.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getCourses);
router.get('/:id', getCourse);

// Protected routes
router.use(protect);

// Enroll in course and add rating - any authenticated user
router.post('/:id/enroll', enrollCourse);
router.post('/:id/ratings', addCourseRating);

// Course CRUD operations - instructors and admins only
router.post('/', authorize('instructor', 'admin'), createCourse);
router.put('/:id', authorize('instructor', 'admin'), updateCourse);
router.delete('/:id', authorize('instructor', 'admin'), deleteCourse);

export default router;