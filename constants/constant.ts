"use client"

import {SiTypescript,SiPython,SiDocker,SiKubernetes,SiJenkins,SiMysql,SiPostgresql,SiAmazon,SiTerraform,
  SiAnsible,SiGithubactions,SiGit,SiBitbucket,SiLinux,SiGnubash, SiPrometheus, SiGrafana, SiSonarqube,
  SiSonatype,SiHelm,SiArgo,SiNginx
  } from "react-icons/si";

 export const SkillData = [
    {
      icon: SiTerraform,
    },
    {
      icon: SiAnsible,
    },
    {
      icon: SiGithubactions,
    },
    {
      icon: SiGit,
    },
    {
      icon: SiBitbucket,
    },
    {
      icon: SiLinux,
    },
    {
      icon: SiTypescript,
    },
    {
      icon: SiGnubash,
    },
    {
      icon: SiPrometheus,
    },
    {
      icon: SiGrafana,
    },
    {
      icon: SiSonarqube,
    },
    {
      icon: SiMysql,
    },
    {
      icon: SiPostgresql,
    },
    {
      icon: SiPython,
    },
    {
      icon: SiSonatype,
    },
    {
      icon: SiAmazon,
    },
    {
      icon: SiHelm,
    },
    {
      icon: SiArgo,
    },
    {
      icon: SiNginx,
    },
    {
      icon: SiDocker,
    },
    {
      icon: SiKubernetes,
    },
    {
      icon: SiJenkins,
    },
];

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About", num: "01" },
    { href: "#experience", label: "Experience", num: "02"  },
    { href: "#project", label: "Project", num: "03" },
    { href: "#contact", label: "Contact", num: "04" },
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
        live: 'https://job-hunt-rp1l.vercel.app/'
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
  