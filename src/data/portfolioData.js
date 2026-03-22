export const personalInfo = {
  name: "Shubham Singh",
  role: "Full-Stack Developer (PERN/MERN)",
  tagline: "I love web development, Linux, tinkering, and breaking things.",
  email: "shubhamsinghup720@gmail.com",
  phone: "+91-9548370206", 
  about: `I build for clarity. While the world can often seem chaotic or devoid of inherent meaning, I find purpose in the process: copy, understand, create anew, and learn. I am driven by an intense curiosity for tech, space, and science, and I can easily lock in for hours of uninterrupted focus to solve complex problems. Whether I'm ricing Arch Linux, building full-stack applications, or drawing motivation from anime, I believe that relentless dedication to what you love is all that matters.`,
  philosophy: "Copy, understand, create anew, and learn.",
  pfp: "assets/me.jpg"
};

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  backend: ["Node.js", "Express", "PHP", "Laravel"],
  database: ["PostgreSQL", "MySQL", "MongoDB"],
  languages: ["C", "C++ (DSA Expertise)", "Java"],
  tools: ["Git", "GitHub", "Docker", "Linux (Arch)", "Neovim", "VSCode", "AWS (EC2)", "Nginx"],
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/shubham-singh-7b2555265/",
  github: "https://github.com/Staggered95",
  leetcode: "https://leetcode.com/u/NerWt2lDYa/",
  reddit: "https://www.reddit.com/user/Original-Creme-1716/",
  cv: "/assets/Shubham_Singh_CV.pdf", 
};

export const projects = [
  {
    id: "yumetunes",
    title: "YumeTunes",
    subtitle: "Complete Dockerized Audio Streaming Platform",
    description: "A full-scale music streaming application featuring modular React architecture, a robust Node/Express backend, and a PostgreSQL database. Engineered with multi-theme support, custom playback contexts, and an admin dashboard for complete data visualization.",
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS EC2", "Nginx", "Cloudinary"],
    features: [
      "Fischer-Yates shuffle & queue functionality",
      "Telemetry-based song recommendations with node-cron",
      "Role-based access control (User, Moderator, Admin)",
      "Automated CI/CD pipeline via GitHub Actions",
      "Reverse proxy and HTTPS via Nginx and Certbot"
    ],
    timeTaken: "40 days",
    githubRepo: "https://github.com/Staggered95/yume-tunes",
    liveDemo: "https://yumetunes.duckdns.org/", 
    media: {
      logo: "/assets/yume-tunes/logo.jpg",
      desktop: [
        "/assets/yume-tunes/carousal.jpg",
        "/assets/yume-tunes/continue-recommended.jpg",
        "/assets/yume-tunes/with-lyrics.jpg",
        "/assets/yume-tunes/library.jpg",
        "/assets/yume-tunes/user-page.jpg",
        "/assets/yume-tunes/analytics.jpg",
        "/assets/yume-tunes/admin-page.jpg",
        "/assets/yume-tunes/add-song.jpg",
        "/assets/yume-tunes/admin-add-times-lyrics.jpg",
        "/assets/yume-tunes/animes.jpg",
        "/assets/yume-tunes/artists.jpg",
      ],
      mobile: [
        "/assets/yume-tunes/home-sm.jpg",
        "/assets/yume-tunes/player-sm.jpg",
        "/assets/yume-tunes/lyrics-in-player-sm.jpg",
        "/assets/yume-tunes/genre-sm.jpg",
        "/assets/yume-tunes/usermenu-sm.jpg",
        "/assets/yume-tunes/userprofile-sm.jpg",
        "/assets/yume-tunes/settings-sm.jpg",
        "/assets/yume-tunes/admin-sm.jpg",
      ]
    }
  },
  {
    id: "hyprland-rice",
    title: "Arch Linux Hyprland Rice",
    subtitle: "Custom Desktop Environment from Scratch",
    description: "A deeply customized Arch Linux setup built over 140 hours, featuring a multi-theme system controlled by a centralized JSON configuration and dozens of automation scripts.",
    techStack: ["Bash", "Linux", "Hyprland", "Waybar", "Gemini API"],
    features: [
      "Custom terminal AI agent with Dev and Arch Helper roles",
      "Automated SSH backups from AWS/Ionos",
      "Dynamic theme switcher and system monitors"
    ],
    timeTaken: "140 hours",
    githubRepo: "https://github.com/Staggered95/slice-of-rice",
    media: [
      { type: "image", url: "/assets/slice-of-rice/1c.jpg" },
      { type: "image", url: "/assets/slice-of-rice/1e.jpg" },
      { type: "image", url: "/assets/slice-of-rice/1g.jpg" },
      { type: "image", url: "/assets/slice-of-rice/2c.jpg" },
      { type: "image", url: "/assets/slice-of-rice/2e.jpg" },
      { type: "image", url: "/assets/slice-of-rice/2g.jpg" },
      { type: "image", url: "/assets/slice-of-rice/3c.jpg" },
      { type: "image", url: "/assets/slice-of-rice/3e.jpg" },
      { type: "image", url: "/assets/slice-of-rice/3g.jpg" },
    ]
  },
  {
    id: "afc-food",
    title: "AFC Food",
    subtitle: "Minimalist Food Listing & Admin Platform",
    description: "A sleek PERN stack application for food listings featuring Google authentication and AI integration.",
    techStack: ["React", "Node.js", "PostgreSQL", "Gemini API"],
    features: [
      "AI-generated summaries via Gemini API",
      "Google OAuth integration",
      "Custom admin panel for inventory management"
    ],
    timeTaken: "10 days",
    githubRepo: "https://github.com/Staggered95/food-listing-app",
    liveDemo: "https://afcfood.in (Archived)",
    media: [
      { type: "image", url: "/assets/afc-food/dashboard.jpg" },
      { type: "image", url: "/assets/afc-food/admin-panel.jpg" },
      { type: "image", url: "/assets/afc-food/wishlist.jpg" },
      { type: "image", url: "/assets/afc-food/support.jpg" },
      { type: "image", url: "/assets/afc-food/login.jpg" },
    ]
  },
  {
    id: "termux-ani-cli",
    title: "Ani-CLI Termux Wrapper",
    subtitle: "Automated Anime Downloader & Syncer",
    description: "A utility script that resolves extension failures in the Animiru app by wrapping ani-cli to download, sync, and automatically check for the latest episodes.",
    techStack: ["Bash", "Termux", "CLI"],
    features: ["Automated downloading", "Direct Animiru integration"],
    githubRepo: "https://github.com/Staggered95/termux-ani-cli-wrapper",
    media: [
      { type: "video", url: "/assets/termux-ani-cli/full-termux-showcase.mp4" }
    ]
  },
  {
    id: "ai-adventure-planner",
    title: "AI Adventure Planner",
    subtitle: "Gemini-powered Chatbot",
    description: "A university project built to explore AI integration, utilizing the Gemini Flash API to generate interactive adventure plans.",
    techStack: ["React", "Node.js", "Gemini Flash API"],
    features: ["Real-time AI responses", "Minimalist chat UI"],
    githubRepo: "https://github.com/Staggered95/ai-based-adventure-planner",
    media: [
      { type: "image", url: "/assets/ai-adventure-planner/home.jpg" },
      { type: "image", url: "/assets/ai-adventure-planner/data-form.jpg" },
      { type: "image", url: "/assets/ai-adventure-planner/chat1.jpg" },
      { type: "image", url: "/assets/ai-adventure-planner/chat2.jpg" },
    ]
  },
  {
    id: "quiz-game",
    title: "Interactive Quiz Platform",
    subtitle: "University Group Project",
    description: "A fast-paced quiz game with a live leaderboard and basic user authentication.",
    techStack: ["React", "Node.js", "Express"],
    features: ["Leaderboard system", "User Auth"],
    githubRepo: "https://github.com/Staggered95/quiz-game",
    media: [
      { type: "image", url: "/assets/quiz-game/dashboard.jpg" },
      { type: "image", url: "/assets/quiz-game/quiz.jpg" },
      { type: "image", url: "/assets/quiz-game/leaderboard.jpg" },
      { type: "image", url: "/assets/quiz-game/admin.jpg" },
      { type: "image", url: "/assets/quiz-game/login.jpg" },
    ]
  }
];

export const certificates = [
  {
    id: "nptel-cloud",
    title: "Cloud Computing",
    issuer: "NPTEL",
    image: "/assets/certificates/nptel-cloud-computing-certificate.jpg"
  },
  {
    id: "fcc-rwd",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    image: "/assets/certificates/freecodecamp-responsive-web-design-certificate.jpg"
  },
  {
    id: "cipher-mern",
    title: "MERN Stack Development",
    issuer: "Cipher Schools",
    image: "/assets/certificates/cipher-schools-mern-stack-certificate.jpg"
  },
  {
    id: "rcs-ctf",
    title: "Cybersecurity Hackathon (CTF)",
    issuer: "RCS",
    image: "/assets/certificates/rcs-ctf-cybersecurity-hackathon-certificate.jpg"
  },
  {
    id: "js-course",
    title: "JavaScript Mastery",
    issuer: "Course Certification",
    image: "/assets/certificates/javascript-course-certificate.jpg"
  },
  {
    id: "cpp-course",
    title: "C++ Programming",
    issuer: "Course Certification",
    image: "/assets/certificates/cpp-certificate.jpg"
  }
];