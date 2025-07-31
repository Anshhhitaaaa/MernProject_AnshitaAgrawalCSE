import { CourseCard } from './CourseCard';

const tests = [
  {
    icon: '📝',
    title: 'UI/UX Design Test',
    buttonColor: 'bg-indigo-400',
  },
  {
    icon: '📊',
    title: 'Data Analyst Test',
    buttonColor: 'bg-pink-400',
  },
  {
    icon: '💻',
    title: 'React & Tailwind Test',
    buttonColor: 'bg-purple-400',
  },
];

export const TestsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-pink-700 mb-6">Give a Test</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tests.map((test, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <span className="text-5xl mb-4">{test.icon}</span>
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">{test.title}</h3>
            <button className={`px-6 py-2 text-white font-bold rounded-full shadow ${test.buttonColor} hover:scale-105 transition-all`}>Start Test</button>
          </div>
        ))}
      </div>
    </section>
  );
}
