
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About", num: "01" },
    { href: "#experience", label: "Experience", num: "02"  },
    { href: "#project", label: "Project", num: "03" },
    { href: "#contact", label: "Contact", num: "04" },
];

export const SkillData = [
    {
      name: "Html 5",
      Image: "/images/html.png",
      width: 80,
      height: 80,
    },

    {
      name: "Css",
      Image: "/images/css.png",
      width: 80,
      height: 80,
    },

    {
      name: "JavaScript",
      Image: "/images/javascript.png",
      width: 65,
      height: 65,
    },

    {
      name: "Tailwind Css",
      Image: "/images/tailwind.png",
      width: 80,
      height: 80,
    },

    {
      name: "React",
      Image: "/images/react.png",
      width: 80,
      height: 80,
    },

    {
      name: "Redux",
      Image: "/images/redux.png",
      width: 80,
      height: 80,
    },
  
    {
      name: "TypeScript",
      Image: "/images/typescript.svg",
      width: 80,
      height: 80,
    },
    {
      name: "Next js 13",
      Image: "/next.svg",
      width: 80,
      height: 80,
    },
    {
      name: "Framer Motion",
      Image: "/images/framer.png",
      width: 80,
      height: 80,
    },
    {
      name: "Stripe Payment",
      Image: "/images/stripe.webp",
      width: 80,
      height: 80,
    },
    {
      name: "Mongo db",
      Image: "/images/mongodb.png",
      width: 40,
      height: 40,
    },
  ];

export const projects = [
    {
        title: 'Bookstore',
        description: 'Book Sales Engagement platform with micro-service architecture built with Express, Mongodb, and NodeJS, featuring a React UI running on AWS infrastructure.',
        techStack: ['AWS', 'React', 'NodeJS', 'Mongodb', 'Express', 'Docker', "Typescript"],
        links: {
        github: 'https://github.com/Ahmedlekan/bookstore',
        live: 'https://mern-bookstore-6ysr.onrender.com'
        },
    },
    {
        title: 'QuickBook',
        description: 'A booking website that allows users to browse listings, make reservations, and manage bookings with secure authentication and an admin panel for managing listings and users..',
        techStack: ['React', 'Typescript', 'Mongodb', 'AWS', "Docker", "Express", "Nodejs"],
        links: {
        github: 'https://github.com/Ahmedlekan/bookingWebApp',
        live: 'https://bookingwebapp-o1kc.onrender.com/'
        },
    },
    {
      title: 'Job Hunt',
      description: "Production-ready, services, built with React and TypeScript, and deployed using a secure, scalable AWS architecture fully managed via Terraform.",
      techStack: [
        'React', 'TypeScript', 'Terraform', 'AWS S3', 'AWS CloudFront', 'AWS Route 53', 'AWS ACM', 
        'AWS CodePipeline', 'AWS CodeBuild', 'AWS WAF', 'AWS CloudWatch'
      ],
      links: {
        github: 'https://github.com/Ahmedlekan/Job-hunt',
        live: 'https://d20hr592h4gx9a.cloudfront.net/'
      }
    },
    {
        title: 'My Portfolio',
        description: 'This very website, which is meant to showcase my experience and projects. This project is built using Nextjs.',
        techStack: ['Tailwind css', 'Nextjs', "React"],
        links: {
        github: 'https://github.com/Ahmedlekan/portfolio-website',
        },
    },

    {
        title: 'Devops Project',
        description: 'Cloud-based devops micro-service project. ',
        techStack: ['JDK', 'Maven', "Tomcat", "Mysql", 'Memcache', 'Rabbitmq'],
        links: {
        github: 'https://github.com/Ahmedlekan/devops-project'
        },
    },
    {
        title: 'Ecommerce',
        description: 'Ecommerce application. This project allows users to browse, search, and purchase products online with authentication, cart management, and an admin dashboard for managing inventor',
        techStack: ['React', "Typescript", 'Mongodb', "Express", 'Nodejs'],
        links: {
        github: 'https://github.com/Ahmedlekan/mern-ecommerce',
        live: 'https://mern-ecommerce-2i1o.onrender.com/'
        },
    },
];
  