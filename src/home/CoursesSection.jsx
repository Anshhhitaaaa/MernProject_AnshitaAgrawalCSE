import { CourseCard } from './CourseCard';

const courses = [
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/785d32c572d7976baaae47400e567a5a2c2793ea?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0',
    category: 'Design',
    title: 'Mastering Design System',
    time: '12pm - 3pm',
    buttonText: 'Start Now',
    buttonColor: 'bg-fuchsia-300',
    progress: 80,
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/57d161dfc770fd0623da29f5dc4274f4ed7c1bf7?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0',
    category: 'Code',
    title: 'Cyber Security',
    time: '4pm - 7pm',
    buttonText: 'Start Now',
    buttonColor: 'bg-stone-300',
    progress: 55,
  },
];

export const CoursesSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">Your Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform">
            <img src={course.image} alt={course.title} className="rounded-xl h-32 w-full object-cover mb-4" />
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider">{course.category}</span>
              <span className="text-xs text-gray-400">{course.time}</span>
            </div>
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{course.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-3 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
            <button className={`mt-4 px-6 py-2 text-white font-bold rounded-full shadow ${course.buttonColor} hover:scale-105 transition-all`}>{course.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
