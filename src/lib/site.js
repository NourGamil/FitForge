export const brand = {
  name: "FitForge",
  tagline: "Premium performance club",
  email: "hello@fitforge.studio",
  phone: "+20 100 555 0123",
  hours: "Mon - Sat · 6:00 AM - 10:00 PM",
  location: "Downtown Training District"
};

export function asset(path) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${cleanPath}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/course" },
  { label: "Programs", href: "/feature" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" }
];

export const heroSlides = [
  {
    eyebrow: "Welcome to the performance floor",
    title: "Train like your future depends on it.",
    text: "Elite coaching, cinematic spaces, and intelligent programs built for strength, endurance, mobility, and total body confidence.",
    image: "../../public/images/header-1.jpg",
    stat: "12K+",
    statLabel: "sessions completed"
  },
  {
    eyebrow: "Personal coaching, studio energy",
    title: "Build muscle, burn limits, own the room.",
    text: "From first rep to final round, every class is engineered to push you safely, seriously, and with style.",
    image: "../../public/images/header-2.jpg",
    stat: "4.9/5",
    statLabel: "member rating"
  }
];

export const stats = [
  { value: "35+", label: "weekly classes" },
  { value: "18", label: "expert coaches" },
  { value: "7", label: "training zones" },
  { value: "24/7", label: "member access" }
];

export const programs = [
  {
    title: "Strength Lab",
    description: "Progressive lifting blocks, form coaching, and recovery planning for serious strength gains.",
    image: "../../public/images/feature-2.jpg",
    tag: "Power"
  },
  {
    title: "HIIT Arena",
    description: "Explosive conditioning, battle ropes, sled work, and measured intensity for maximum output.",
    image: "../../public/images/services-img.jpg",
    tag: "Conditioning"
  },
  {
    title: "Athletic Flow",
    description: "Mobility, core control, and movement quality designed to keep you training pain-free.",
    image: "../../public/images/feature-1.jpg",
    tag: "Mobility"
  },
  {
    title: "Body Rebuild",
    description: "A complete transformation program combining training, nutrition habits, and accountability.",
    image: "../../public/images/feature-4.jpg",
    tag: "Transform"
  }
];

export const featurePillars = [
  {
    icon: "../../public/images/icon-1.png",
    title: "Performance Tracking",
    text: "Clear progress dashboards and weekly check-ins keep every workout connected to a goal."
  },
  {
    icon: "../../public/images/icon-2.png",
    title: "Smart Strength Plans",
    text: "Structured lifting cycles with coach-led adjustments, not random workouts copied from the internet."
  },
  {
    icon: "../../public/images/icon-3.png",
    title: "Elite Coaching",
    text: "Technique-first coaches guide every movement so you can train harder without guessing."
  },
  {
    icon: "../../public/images/icon-4.png",
    title: "Recovery Culture",
    text: "Mobility, stretching, and recovery sessions help your body keep up with your ambition."
  },
  {
    icon: "../../public/images/icon-5.png",
    title: "Combat Conditioning",
    text: "Boxing-inspired cardio, footwork, and impact rounds for power and confidence."
  },
  {
    icon: "../../public/images/icon-6.png",
    title: "Endurance Engine",
    text: "Tread, row, sprint, and hybrid circuits to build real stamina and daily energy."
  }
];

export const workouts = [
  { title: "Power Bench", image: "../../public/images/work-1.jpg", category: "Strength" },
  { title: "Olympic Lift", image: "../../public/images/work-2.jpg", category: "Power" },
  { title: "Glute Drive", image: "../../public/images/work-3.jpg", category: "Strength" },
  { title: "Back Builder", image: "../../public/images/work-4.jpg", category: "Strength" },
  { title: "Arms & Core", image: "../../public/images/work-5.jpg", category: "Muscle" },
  { title: "Coach Session", image: "../../public/images/work-6.jpg", category: "Personal" },
  { title: "Upper Focus", image: "../../public/images/work-7.jpg", category: "Strength" },
  { title: "Partner HIIT", image: "../../public/images/work-8.jpg", category: "HIIT" },
  { title: "Leg Day", image: "../../public/images/work-9.jpg", category: "Strength" },
  { title: "Neon Fight", image: "../../public/images/work-10.jpg", category: "Boxing" },
  { title: "Pull Protocol", image: "../../public/images/work-11.jpg", category: "Muscle" },
  { title: "Mobility Fix", image: "../../public/images/work-12.jpg", category: "Recovery" }
];

export const courses = [
  {
    title: "Foundations 30",
    level: "Beginner",
    duration: "4 weeks",
    price: "$149",
    image: "../../public/images/feature-4.jpg",
    points: ["3 coached sessions weekly", "movement screening", "starter nutrition guide"]
  },
  {
    title: "Forge Strength",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$299",
    image: "../../public/images/feature-2.jpg",
    points: ["progressive overload plan", "barbell technique labs", "weekly PR tracking"]
  },
  {
    title: "Hybrid Athlete",
    level: "Advanced",
    duration: "10 weeks",
    price: "$399",
    image: "../../public/images/feature-3.jpg",
    points: ["strength + endurance split", "conditioning tests", "coach feedback"]
  }
];

export const coaches = [
  { name: "Maya Carter", role: "Strength Director", image: "../../public/images/team-1.jpg" },
  { name: "Leo Stone", role: "Athletic Performance", image: "../../public/images/team-2.jpg" },
  { name: "Niko Reyes", role: "Conditioning Coach", image: "../../public/images/team-3.jpg" },
  { name: "Adam Cole", role: "Transformation Lead", image: "../../public/images/team-4.jpg" }
];

export const testimonials = [
  {
    name: "Sara Milton",
    role: "Founder, studio member",
    image: "../../public/images/testimonial-1.jpg",
    quote: "FitForge feels like a private club with the energy of a professional training camp. I finally train with structure."
  },
  {
    name: "Lina Brooks",
    role: "Designer",
    image: "../../public/images/testimonial-2.jpg",
    quote: "The coaches corrected years of bad form in one month. The space is beautiful, but the programming is the real luxury."
  },
  {
    name: "Daniel Cho",
    role: "Entrepreneur",
    image: "../../public/images/testimonial-3.jpg",
    quote: "I came for weight loss and stayed for performance. Every class feels intentional, polished, and addictive."
  }
];

export const blogPosts = [
  {
    title: "How to build a weekly training split that you can actually keep",
    excerpt: "A realistic approach to balancing strength, cardio, mobility, and recovery without burning out.",
    image: "../../public/images/goal-background-img.jpg",
    date: "May 18, 2026"
  },
  {
    title: "Why premium coaching starts with better movement quality",
    excerpt: "Before heavier weights and harder circuits, the smartest athletes learn how to move well.",
    image: "../../public/images/about-2.png",
    date: "May 09, 2026"
  },
  {
    title: "The conditioning formula we use for stronger everyday energy",
    excerpt: "Intervals, zones, and recovery windows explained in a simple way you can use this week.",
    image: "../../public/images/carousel-1.jpg",
    date: "April 30, 2026"
  }
];

export const membership = [
  { label: "Day Pass", price: "$19", detail: "Premium floor access" },
  { label: "Performance", price: "$89", detail: "Unlimited classes" },
  { label: "Elite", price: "$149", detail: "Coaching + programs" }
];
