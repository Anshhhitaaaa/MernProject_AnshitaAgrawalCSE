import { useState } from 'react';
import { CourseCard } from './CourseCard';

export function RecordingClasses() {
  const [showModal, setShowModal] = useState(false);
  const classes = [
    { image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', category: 'Coding', title: 'React.js', lessons: '2 lessons', duration: '8 hrs', instructor: 'David', instructorAvatar: 'https://randomuser.me/api/portraits/men/45.jpg', rating: 4.7, description: 'Deep dive into React.js.', syllabus: ['JSX & Components', 'Hooks', 'State Management'], tags: ['React', 'JavaScript', 'Frontend'], students: 600 },
    { image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Data', title: 'Learn SQL from Scratch', lessons: '23 lessons', duration: '72 hrs', instructor: 'Eva', instructorAvatar: 'https://randomuser.me/api/portraits/women/65.jpg', rating: 4.8, description: 'SQL for beginners to advanced.', syllabus: ['SQL Basics', 'Joins', 'Optimization'], tags: ['SQL', 'Database', 'Data'], students: 1100 },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', category: 'Design', title: 'UI/UX Design', lessons: '17 lessons', duration: '42 hrs', instructor: 'Frank', instructorAvatar: 'https://randomuser.me/api/portraits/men/23.jpg', rating: 4.9, description: 'UI/UX fundamentals and practice.', syllabus: ['UX Principles', 'Wireframing', 'Prototyping'], tags: ['UI', 'UX', 'Design'], students: 900 },
    { image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Data', title: 'Learn data analyst', lessons: '16 lessons', duration: '36 hrs', instructor: 'Grace', instructorAvatar: 'https://randomuser.me/api/portraits/women/12.jpg', rating: 4.5, description: 'Become a data analyst.', syllabus: ['Data Cleaning', 'Visualization', 'Reporting'], tags: ['Data', 'Analytics', 'Business'], students: 700 },
    { image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=400&q=80', category: 'Cloud', title: 'AWS Cloud Basics', lessons: '10 lessons', duration: '24 hrs', instructor: 'Ivy', instructorAvatar: 'https://randomuser.me/api/portraits/women/33.jpg', rating: 4.6, description: 'Learn AWS cloud fundamentals.', syllabus: ['EC2', 'S3', 'IAM'], tags: ['AWS', 'Cloud', 'DevOps'], students: 500 },
    { image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Mobile', title: 'Android App Development', lessons: '15 lessons', duration: '40 hrs', instructor: 'Leo', instructorAvatar: 'https://randomuser.me/api/portraits/men/77.jpg', rating: 4.7, description: 'Build Android apps from scratch.', syllabus: ['Kotlin', 'UI Design', 'APIs'], tags: ['Android', 'Mobile', 'Kotlin'], students: 650 },
    { image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'AI', title: 'Deep Learning Crash Course', lessons: '12 lessons', duration: '36 hrs', instructor: 'Mona', instructorAvatar: 'https://randomuser.me/api/portraits/women/29.jpg', rating: 4.8, description: 'Intro to deep learning.', syllabus: ['Neural Nets', 'TensorFlow', 'Projects'], tags: ['AI', 'Deep Learning', 'TensorFlow'], students: 800 },
  ];
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recording Classes</h2>
        <button onClick={() => setShowModal(true)} className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold shadow hover:bg-indigo-600 transition">View All</button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        {classes.slice(0, 4).map((classItem, idx) => (
          <div key={idx} className="flex flex-col items-start bg-white rounded-xl shadow p-4 w-full md:w-1/4">
            <img src={classItem.image} alt={classItem.title} className="w-full h-24 object-cover rounded-lg mb-2" />
            <div className="text-xs text-gray-500 font-semibold mb-1">{classItem.category}</div>
            <div className="font-medium text-gray-800 mb-1">{classItem.title}</div>
            <div className="text-xs text-gray-400">{classItem.lessons} • {classItem.duration}</div>
            <button className="mt-2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold shadow hover:bg-pink-600 transition text-xs">View now</button>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full relative max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-lg font-bold mb-4">All Recording Classes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {classes.map((classItem, idx) => (
                <div key={idx} className="flex flex-col gap-2 bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-4 items-center mb-2">
                    <img src={classItem.image} alt={classItem.title} className="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <div className="font-semibold text-gray-800 text-base">{classItem.title}</div>
                      <div className="text-xs text-gray-500 mb-1">{classItem.category} • {classItem.lessons} • {classItem.duration}</div>
                      <div className="flex items-center gap-2">
                        <img src={classItem.instructorAvatar} alt={classItem.instructor} className="w-6 h-6 rounded-full border" />
                        <span className="text-xs text-gray-600">{classItem.instructor}</span>
                        <span className="text-xs text-yellow-500">{classItem.rating} ⭐</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 mb-1">{classItem.description}</div>
                  <ul className="list-disc list-inside text-xs text-gray-600 mb-1">
                    {classItem.syllabus.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-1">
                    {classItem.tags.map((tag, i) => <span key={i} className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs">{tag}</span>)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">👥 {classItem.students} students</span>
                    <button className="px-3 py-1 rounded bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xs font-bold shadow hover:bg-indigo-600 transition">Go to Class</button>
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
