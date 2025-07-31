export function CourseStats() {
  // Example data for the chart
  const total = 42;
  const categories = [
    { name: "Coding", value: 10, color: "#7C3AED" },
    { name: "Business", value: 8, color: "#F472B6" },
    { name: "Design", value: 12, color: "#A78BFA" },
    { name: "Video Editing", value: 6, color: "#F9A8D4" },
    { name: "Data", value: 6, color: "#F87171" },
  ];
  // Calculate SVG arc values
  const circumference = 2 * Math.PI * 60;
  let offset = 0;
  const chartSegments = categories.map((cat, idx) => {
    const percent = cat.value / total;
    const dash = percent * circumference;
    const seg = (
      <circle
        key={cat.name}
        r="60"
        cx="80"
        cy="80"
        fill="none"
        stroke={cat.color}
        strokeWidth="18"
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeDashoffset={-offset}
        style={{ transition: 'stroke-dasharray 0.5s' }}
      />
    );
    offset += dash;
    return seg;
  });
  return (
    <div className="flex flex-col justify-center items-center w-full h-full min-h-[400px] max-w-md mx-auto py-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">Popular Course</h2>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-60 h-60 flex items-center justify-center mb-6">
          <svg width="240" height="240" viewBox="0 0 240 240">
            <circle r="90" cx="120" cy="120" fill="none" stroke="#E5E7EB" strokeWidth="24" />
            {categories.map((cat, idx) => {
              const percent = cat.value / total;
              const circumference = 2 * Math.PI * 90;
              let offset = 0;
              for (let i = 0; i < idx; i++) {
                offset += categories[i].value / total * circumference;
              }
              const dash = percent * circumference;
              return (
                <circle
                  key={cat.name}
                  r="90"
                  cx="120"
                  cy="120"
                  fill="none"
                  stroke={cat.color}
                  strokeWidth="24"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-offset}
                  style={{ transition: 'stroke-dasharray 0.3s' }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-gray-800">{total}</span>
            <span className="text-base text-gray-500">Total Course</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {categories.map(cat => (
            <div key={cat.name} className="flex items-center gap-3 text-base">
              <span className="inline-block w-4 h-4 rounded-full" style={{ background: cat.color }}></span>
              <span className="text-gray-700 font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  