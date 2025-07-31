import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a course title'],
    unique: true,
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  image: {
    type: String,
    default: 'default-course.jpg'
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: [
      'Coding',
      'Design',
      'Data',
      'Business',
      'Marketing',
      'Other'
    ]
  },
  level: {
    type: String,
    required: [true, 'Please add a difficulty level'],
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  totalLessons: {
    type: Number,
    required: [true, 'Please add total number of lessons']
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  lessons: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    order: {
      type: Number,
      required: true
    }
  }],
  ratings: [{
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    comment: {
      type: String
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5']
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate average rating
CourseSchema.statics.getAverageRating = async function(courseId) {
  const obj = await this.aggregate([
    {
      $match: { _id: courseId }
    },
    {
      $unwind: '$ratings'
    },
    {
      $group: {
        _id: '$_id',
        averageRating: { $avg: '$ratings.rating' }
      }
    }
  ]);

  try {
    if (obj[0]) {
      await this.findByIdAndUpdate(courseId, {
        averageRating: obj[0].averageRating.toFixed(1)
      });
    } else {
      await this.findByIdAndUpdate(courseId, {
        averageRating: 0
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageRating after save
CourseSchema.post('save', function() {
  this.constructor.getAverageRating(this._id);
});

// Call getAverageRating after remove
CourseSchema.pre('remove', function() {
  this.constructor.getAverageRating(this._id);
});

const Course = mongoose.model('Course', CourseSchema);

export default Course;