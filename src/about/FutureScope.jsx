export const FutureScope = () => {
  const features = [
    {
      icon: "🔧",
      title: "Platform Features",
      subtitle: "Coming Soon",
      gradient: "from-blue-500 to-cyan-600",
      items: [
        "Challenge Builder: For companies or educators to post custom challenges.",
        "Live Showcase Nights: Students present work live to peers & mentors.",
        "Skill Graph & Smart Portfolio Generator"
      ]
    },
    {
      icon: "🧠",
      title: "AI-Powered Additions",
      gradient: "from-purple-500 to-pink-600",
      items: [
        "AI feedback for design/code submissions.",
        "Smart challenge suggestions based on user activity and learning style."
      ]
    },
    {
      icon: "🌐",
      title: "Community",
      gradient: "from-green-500 to-emerald-600",
      items: [
        "Regional Chapters & Campus Ambassadors",
        "Creator spotlight: Feature top performers monthly",
        "Integration with LinkedIn + Resume Builder"
      ]
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Future Scope of UpgenZ
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            UpgenZ is just getting started — and its future is as dynamic as the
            users it empowers.
          </p>
        </div>

        {/* Simple Features Grid */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full inline-block">
                    {feature.subtitle}
                  </p>
                )}
              </div>

              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${feature.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Simple Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Ready to Shape the Future?
            </h3>
            <p className="text-lg text-purple-100 mb-4">
              Join us in building the next generation of creators and innovators.
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
  