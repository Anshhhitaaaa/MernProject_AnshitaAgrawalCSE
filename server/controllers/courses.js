import Course from '../models/Course.js';
import User from '../models/User.js';

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
export const getCourses = async (req, res) => {
  try {
    let query;
    
    // Copy req.query
    const reqQuery = { ...req.query };
    
    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit'];
    
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
    
    // Create query string
    let queryStr = JSON.stringify(reqQuery);
    
    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    
    // Finding resource
    query = Course.find(JSON.parse(queryStr)).populate({
      path: 'instructor',
      select: 'firstName lastName profileImage'
    });
    
    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }
    
    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }
    
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Course.countDocuments(JSON.parse(queryStr));
    
    query = query.skip(startIndex).limit(limit);
    
    // Executing query
    const courses = await query;
    
    // Pagination result
    const pagination = {};
    
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
    
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
    
    res.status(200).json({
      success: true,
      count: courses.length,
      pagination,
      data: courses
    });
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
export const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate({
      path: 'instructor',
      select: 'firstName lastName profileImage'
    });
    
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Create new course
// @route   POST /api/courses
// @access  Private/Instructor
export const createCourse = async (req, res) => {
  try {
    // Add user to req.body
    req.body.instructor = req.user.id;
    
    const course = await Course.create(req.body);
    
    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private/Instructor
export const updateCourse = async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    // Make sure user is course instructor
    if (course.instructor.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ success: false, message: 'Not authorized to update this course' });
    }
    
    course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Update course error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private/Instructor
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    // Make sure user is course instructor
    if (course.instructor.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ success: false, message: 'Not authorized to delete this course' });
    }
    
    await course.remove();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    console.error('Delete course error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Enroll in course
// @route   POST /api/courses/:id/enroll
// @access  Private
export const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    const user = await User.findById(req.user.id);
    
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    // Check if already enrolled
    if (user.enrolledCourses.includes(course._id)) {
      return res.status(400).json({ success: false, message: 'Already enrolled in this course' });
    }
    
    // Add course to user's enrolledCourses
    user.enrolledCourses.push(course._id);
    await user.save();
    
    // Add user to course's students
    course.students.push(user._id);
    await course.save();
    
    res.status(200).json({
      success: true,
      data: { course, user }
    });
  } catch (error) {
    console.error('Enroll course error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Add course rating
// @route   POST /api/courses/:id/ratings
// @access  Private
export const addCourseRating = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    // Check if user has already rated
    const alreadyRated = course.ratings.find(
      r => r.user.toString() === req.user.id
    );
    
    if (alreadyRated) {
      // Update existing rating
      course.ratings.forEach(r => {
        if (r.user.toString() === req.user.id) {
          r.rating = rating;
          r.comment = comment;
        }
      });
    } else {
      // Add new rating
      course.ratings.push({
        rating,
        comment,
        user: req.user.id
      });
    }
    
    await course.save();
    
    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Add course rating error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};