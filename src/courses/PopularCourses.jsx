import { useState } from 'react';
import { CourseCard } from './CourseCard';

export function PopularCourses() {
  const [showModal, setShowModal] = useState(false);
  const courses = [
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', category: 'Design', title: 'Create 3D with blender', lessons: '16 lessons', duration: '48 hrs', instructor: 'Alice', instructorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg', rating: 4.8, description: 'Learn Blender from scratch.', syllabus: ['Blender basics', '3D modeling', 'Rendering techniques'], tags: ['3D', 'Design', 'Blender'], students: 1200 },
    { image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', category: 'Coding', title: 'Digital Marketing', lessons: '25 lessons', duration: '72 hrs', instructor: 'Bob', instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 4.6, description: 'Master digital marketing skills.', syllabus: ['SEO', 'Content Marketing', 'Analytics'], tags: ['Marketing', 'SEO', 'Digital'], students: 950 },
    { image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Business', title: 'Slicing UI Design with Tailwind', lessons: '12 lessons', duration: '32 hrs', instructor: 'Carol', instructorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg', rating: 4.9, description: 'UI design with Tailwind CSS.', syllabus: ['Tailwind basics', 'UI slicing', 'Responsive design'], tags: ['UI', 'Tailwind', 'CSS'], students: 800 },
    { image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80', category: 'Programming', title: 'Python for Everybody', lessons: '20 lessons', duration: '60 hrs', instructor: 'Dan', instructorAvatar: 'https://randomuser.me/api/portraits/men/41.jpg', rating: 4.7, description: 'Start coding in Python from zero.', syllabus: ['Python basics', 'Data structures', 'APIs'], tags: ['Python', 'Programming', 'Beginner'], students: 1500 },
    { image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=400&q=80', category: 'AI', title: 'Intro to Machine Learning', lessons: '18 lessons', duration: '54 hrs', instructor: 'Emma', instructorAvatar: 'https://randomuser.me/api/portraits/women/22.jpg', rating: 4.8, description: 'Machine learning fundamentals.', syllabus: ['Supervised learning', 'Unsupervised learning', 'Projects'], tags: ['AI', 'ML', 'Data'], students: 1100 },
    { image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Web', title: 'Fullstack Web Development', lessons: '30 lessons', duration: '90 hrs', instructor: 'Sam', instructorAvatar: 'https://randomuser.me/api/portraits/men/55.jpg', rating: 4.9, description: 'Become a fullstack web developer.', syllabus: ['HTML/CSS', 'JavaScript', 'Backend'], tags: ['Web', 'Fullstack', 'JavaScript'], students: 2000 },
  ];
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Popular Course</h2>
        <button onClick={() => setShowModal(true)} className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold shadow hover:bg-indigo-600 transition">View All</button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        {courses.slice(0, 3).map((course, idx) => (
          <div key={idx} className="flex flex-col items-start bg-white rounded-xl shadow p-4 w-full md:w-1/3">
            <img src={course.image} alt={course.title} className="w-full h-24 object-cover rounded-lg mb-2" />
            <div className="text-xs text-gray-500 font-semibold mb-1">{course.category}</div>
            <div className="font-medium text-gray-800 mb-1">{course.title}</div>
            <div className="text-xs text-gray-400">{course.lessons} • {course.duration}</div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full relative max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-lg font-bold mb-4">All Popular Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {courses.map((course, idx) => (
                <div key={idx} className="flex flex-col gap-1 bg-gray-50 rounded-lg p-2">
                  <div className="flex gap-2 items-center mb-1">
                    <img src={course.image} alt={course.title} className="w-10 h-10 object-cover rounded-lg" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm leading-tight">{course.title}</div>
                      <div className="text-xs text-gray-500 mb-0.5 leading-tight">{course.category} • {course.lessons} • {course.duration}</div>
                      <div className="flex items-center gap-1">
                        <img src={course.instructorAvatar} alt={course.instructor} className="w-4 h-4 rounded-full border" />
                        <span className="text-xs text-gray-600">{course.instructor}</span>
                        <span className="text-xs text-yellow-500">{course.rating} ⭐</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 mb-0.5 line-clamp-2">{course.description}</div>
                  <ul className="list-disc list-inside text-xs text-gray-600 mb-0.5">
                    {course.syllabus.map((item, i) => <li key={i} className="leading-tight">{item}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-1 mb-0.5">
                    {course.tags.map((tag, i) => <span key={i} className="bg-indigo-100 text-indigo-700 px-1 py-0.5 rounded text-xs">{tag}</span>)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">👥 {course.students}</span>
                    <button className="px-2 py-0.5 rounded bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-xs font-bold shadow hover:bg-pink-600 transition">Go</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
