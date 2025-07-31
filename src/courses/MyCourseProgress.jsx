export function MyCourseProgress() {
  // Example data
  const courses = [
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', category: 'Design', title: 'UI/UX Design', progress: 75 },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Coding', title: 'React.js', progress: 69 },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Data', title: 'Learn data analyst', progress: 64 },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', category: 'Design', title: 'Video Editing', progress: 75 },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', category: 'Design', title: 'Mastering Design System', progress: 69 },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Data', title: 'Learn SQL from Scratch', progress: 24 },
  ];
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 w-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">My Course</h2>
      <div className="flex flex-col gap-4">
        {courses.map((course, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white rounded-xl p-3 shadow-sm">
            <img src={course.image} alt={course.title} className="w-8 h-8 rounded object-cover" />
            <div className="flex-1">
              <div className="text-xs text-gray-500 font-semibold mb-1">{course.category}</div>
              <div className="font-medium text-gray-800 mb-1">{course.title}</div>
            </div>
            <div className="relative w-12 h-12">
              <svg width="48" height="48">
                <circle cx="24" cy="24" r="20" fill="none" stroke="#E5E7EB" strokeWidth="5" />
                <circle cx="24" cy="24" r="20" fill="none" stroke="#a78bfa" strokeWidth="5" strokeDasharray={`${2 * Math.PI * 20 * course.progress / 100} ${2 * Math.PI * 20 * (1 - course.progress / 100)}`} strokeDashoffset="0" style={{ transition: 'stroke-dasharray 0.5s' }} />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-600">{course.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  