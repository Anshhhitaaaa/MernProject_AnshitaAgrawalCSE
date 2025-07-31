export function MyCourseTable() {
  // Example course data
  const courses = [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", name: "Mastering Design System", lessons: "18/24", status: "Ongoing", level: "Beginner", category: "Design", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", name: "UI/UX Design", lessons: "12/16", status: "Ongoing", level: "Easy", category: "Design", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "Learn data analyst", lessons: "15/35", status: "Ongoing", level: "Expert", category: "Data", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", name: "Video Editing", lessons: "18/24", status: "Ongoing", level: "Beginner", category: "Design", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "Learn SQL from Scratch", lessons: "23/45", status: "Completed", level: "Expert", category: "Data", statusColor: "bg-purple-100 text-purple-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js", lessons: "2/34", status: "Ongoing", level: "Beginner", category: "Coding", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript Essentials", lessons: "20/30", status: "Ongoing", level: "Intermediate", category: "Coding", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python for Data Science", lessons: "25/40", status: "Ongoing", level: "Intermediate", category: "Data", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma UI Prototyping", lessons: "10/15", status: "Ongoing", level: "Beginner", category: "Design", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js Backend Basics", lessons: "8/20", status: "Ongoing", level: "Easy", category: "Coding", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5 & CSS3 Mastery", lessons: "30/30", status: "Completed", level: "Beginner", category: "Design", statusColor: "bg-purple-100 text-purple-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/business/business-original.svg", name: "Business Analytics", lessons: "12/18", status: "Ongoing", level: "Intermediate", category: "Business", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript Advanced", lessons: "5/25", status: "Ongoing", level: "Expert", category: "Coding", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", name: "Vue.js Fundamentals", lessons: "12/20", status: "Ongoing", level: "Beginner", category: "Coding", statusColor: "bg-indigo-100 text-indigo-700" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker for Developers", lessons: "7/15", status: "Ongoing", level: "Intermediate", category: "Coding", statusColor: "bg-indigo-100 text-indigo-700" }
  ];
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 w-full overflow-x-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">All Course</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="py-2"> </th>
            <th className="py-2">Course Name</th>
            <th className="py-2">Lessons</th>
            <th className="py-2">Status</th>
            <th className="py-2">Level</th>
            <th className="py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, idx) => (
            <tr key={idx} className="border-b last:border-b-0">
              <td className="py-3"><img src={course.image} alt={course.name} className="w-8 h-8 rounded object-cover" /></td>
              <td className="py-3 font-medium text-gray-800">{course.name}</td>
              <td className="py-3">{course.lessons}</td>
              <td className="py-3">
                <span className={`px-4 py-1 rounded-full text-xs font-bold ${course.statusColor}`}>{course.status}</span>
              </td>
              <td className="py-3">{course.level}</td>
              <td className="py-3">{course.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  