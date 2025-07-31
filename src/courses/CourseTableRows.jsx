export function CourseTableRows() {
    const courses = [
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        title: "Mastering Design System",
        lessons: "18/24",
        status: "Ongoing",
        level: "Beginner",
        category: "Design"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        title: "UI/UX Design",
        lessons: "12/16",
        status: "Ongoing",
        level: "Easy",
        category: "Design"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        title: "Learn data analyst",
        lessons: "15/35",
        status: "Ongoing",
        level: "Expert",
        category: "Data"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        title: "Video Editing",
        lessons: "18/24",
        status: "Ongoing",
        level: "Beginner",
        category: "Design"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        title: "Learn SQL from Scratch",
        lessons: "23/45",
        status: "completed",
        level: "Expert",
        category: "Data"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        title: "React.js",
        lessons: "2/34",
        status: "Ongoing",
        level: "Beginner",
        category: "Coding"
      },
      // Additional courses
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        title: "JavaScript Essentials",
        lessons: "20/30",
        status: "Ongoing",
        level: "Intermediate",
        category: "Coding"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        title: "Python for Data Science",
        lessons: "25/40",
        status: "Ongoing",
        level: "Intermediate",
        category: "Data"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        title: "Figma UI Prototyping",
        lessons: "10/15",
        status: "Ongoing",
        level: "Beginner",
        category: "Design"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        title: "Node.js Backend Basics",
        lessons: "8/20",
        status: "Ongoing",
        level: "Easy",
        category: "Coding"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        title: "HTML5 & CSS3 Mastery",
        lessons: "30/30",
        status: "completed",
        level: "Beginner",
        category: "Design"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/business/business-original.svg",
        title: "Business Analytics",
        lessons: "12/18",
        status: "Ongoing",
        level: "Intermediate",
        category: "Business"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        title: "TypeScript Advanced",
        lessons: "5/25",
        status: "Ongoing",
        level: "Expert",
        category: "Coding"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        title: "Vue.js Fundamentals",
        lessons: "12/20",
        status: "Ongoing",
        level: "Beginner",
        category: "Coding"
      },
      {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        title: "Docker for Developers",
        lessons: "7/15",
        status: "Ongoing",
        level: "Intermediate",
        category: "Coding"
      }
    ];
  
    return (
      <section className="w-full">
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 flex items-center gap-2">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          All Courses
        </h2>
        <div className="flex flex-col gap-6">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center justify-between w-full bg-white/80 rounded-2xl shadow p-6 hover:scale-[1.02] transition-transform duration-200">
              <div className="flex gap-4 items-center max-w-full text-2xl w-[250px]">
                <img src={course.image} alt={course.title} className="w-14 h-14 rounded-xl object-cover shadow" />
                <h3 className="flex-auto w-[160px] text-lg font-semibold text-indigo-800">{course.title}</h3>
              </div>
              <div className="text-lg text-black font-medium">{course.lessons}</div>
              <span className={`px-4 py-1 rounded-full text-xs font-bold ${course.status === 'Ongoing' ? 'bg-indigo-100 text-indigo-700' : 'bg-pink-100 text-pink-700'}`}>{course.status}</span>
              <span className="px-4 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">{course.level}</span>
              <span className="px-4 py-1 rounded-full text-xs font-bold bg-fuchsia-100 text-fuchsia-700">{course.category}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  