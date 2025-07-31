import { ChallengeCard } from './ChallengeCard';

const challenges = [
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/6193912c240d486374fe5ac33a9b50ecb8677bec?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0',
    category: 'Code',
    subtitle: 'React.js',
    description: 'With React or Vue + localStorage. Bonus: add dark mode, streak counter.',
    buttonText: 'Start Challenge',
    buttonColor: 'bg-indigo-400',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/fc6d339c7e53648f3506bf317d2dce2cd216905a?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0',
    category: 'Design',
    subtitle: 'Video Editing',
    description: 'Pick any subject (room decor, growth) & show the process creatively.',
    buttonText: 'Start Challenge',
    buttonColor: 'bg-pink-400',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/4d605116229e1d084d8b1be427ae795fbd7ba306?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0',
    category: 'Design',
    subtitle: 'UI/UX Design',
    description: 'Pick an app you hate using. Write a UX critique + suggest improvements.',
    buttonText: 'Start Challenge',
    buttonColor: 'bg-purple-400',
  },
];

export const ChallengesSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-pink-700 mb-6">Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {challenges.map((ch, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform">
            <img src={ch.image} alt={ch.subtitle} className="rounded-xl h-32 w-full object-cover mb-4" />
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">{ch.category}</span>
            <h3 className="text-lg font-semibold text-indigo-800 mb-1">{ch.subtitle}</h3>
            <p className="text-gray-600 mb-4 text-sm">{ch.description}</p>
            <button className={`mt-auto px-6 py-2 text-white font-bold rounded-full shadow ${ch.buttonColor} hover:scale-105 transition-all`}>{ch.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
