import { CourseCard } from './CourseCard';

const recommended = [
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/95176cafbb7d19616aab999baa617de18305a25f?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0',
    title: 'Django, Python',
    buttonText: 'Buy Now',
    buttonColor: 'bg-fuchsia-300',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c86a125b61a2d2ee246bce3bcbc4834637435f3b?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0',
    title: 'AI/ML, Machine learning',
    buttonText: 'Buy Now',
    buttonColor: 'bg-fuchsia-300',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/254d079bf80c4651131f336c2fe371b4e846bcb9?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0',
    title: 'Data Structure',
    buttonText: 'Start Now',
    buttonColor: 'bg-fuchsia-300',
  },
];

export const RecommendedSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recommended.map((rec, idx) => (
          <div key={idx} className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform">
            <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Recommended</span>
            <img src={rec.image} alt={rec.title} className="rounded-xl h-32 w-full object-cover mb-4" />
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">{rec.title}</h3>
            <button className={`mt-4 px-6 py-2 text-white font-bold rounded-full shadow ${rec.buttonColor} hover:scale-105 transition-all`}>{rec.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
