import { FeatureCircle } from './FeatureCircle';

export const AboutSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About UpgenZ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
              UpgenZ is a next-gen digital platform built exclusively for Gen Z
              learners and creators to explore hands-on, challenge-based learning.
              It bridges the gap between traditional education and real-world
              skills by offering curated challenges in Coding, UI/UX, Video
              Editing, Design, Marketing, and Data, allowing students to learn by
              doing and build a verified, shareable portfolio.
            </p>
          </div>
        </div>

        {/* Simple Features Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Learn practical skills from real-world scenarios
            </h3>
            <p className="text-gray-600 text-sm">
              Master industry-relevant skills through hands-on projects and real-world challenges.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">📂</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Build a public portfolio that proves your skills
            </h3>
            <p className="text-gray-600 text-sm">
              Create a stunning portfolio that showcases your expertise to potential employers.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Compete in creative & technical challenges
            </h3>
            <p className="text-gray-600 text-sm">
              Push your limits and showcase your creativity in exciting competitions.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Collaborate with peers across India & beyond
            </h3>
            <p className="text-gray-600 text-sm">
              Connect with like-minded creators and build a global network of innovators.
            </p>
          </div>
        </div>

        {/* Simple Bottom quote */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Learn. Compete. Create.
            </h3>
            <p className="text-lg text-indigo-100">
              That's the UpgenZ way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
