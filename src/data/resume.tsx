import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";

type HackathonLink = { title: string; icon: React.ReactNode; href: string };

const GITHUB_URL = "https://github.com/Puttarohith";
const LINKEDIN_URL = "https://www.linkedin.com/in/rohith-putta-76b1b8245";

export const DATA = {
  name: "Rohith Putta",
  initials: "RP",
  url: GITHUB_URL,
  location: "Chittoor, Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Chittoor",
  description:
    "AI undergraduate building intelligent systems across Generative AI, Computer Vision, Robotics and Autonomous UAVs.",
  summary:
    "I'm an Artificial Intelligence undergraduate at [VEMU Institute of Technology](/#education) with hands-on experience in Python, Machine Learning, Generative AI, LLMs, Computer Vision, Robotics, UAV Systems and Autonomous Systems. I enjoy building intelligent, scalable automation solutions — from [accident-detection systems with drone-based emergency response](/#projects) to off-road segmentation models for UGVs. I was a finalist at Aarohan, IIT Bombay Techfest, and have [taken part in 10+ national and international hackathons](/#hackathons). My research interests include Defence AI, Generative AI, LLMs, Computer Vision, Robotics & Autonomous Systems, Autonomous UAV Systems and Multi-Agent Systems.\n\n**Certifications:** Career Essentials in Generative AI (LinkedIn & Microsoft) · AWS Cloud Practitioner Essentials (AWS) · Professional Diploma in Agile Product Management (MTF Institute).",
  avatarUrl: "",
  skills: [
    { name: "Python", icon: Python },
    { name: "C", icon: undefined },
    { name: "PyTorch", icon: undefined },
    { name: "HuggingFace Transformers", icon: undefined },
    { name: "OpenCV", icon: undefined },
    { name: "YOLO", icon: undefined },
    { name: "NumPy", icon: undefined },
    { name: "Pandas", icon: undefined },
    { name: "Generative AI", icon: undefined },
    { name: "LLMs", icon: undefined },
    { name: "Machine Learning", icon: undefined },
    { name: "Computer Vision", icon: undefined },
    { name: "MySQL", icon: undefined },
    { name: "MongoDB", icon: undefined },
    { name: "Neon (PostgreSQL)", icon: undefined },
    { name: "Supabase", icon: undefined },
    { name: "Arduino", icon: undefined },
    { name: "Raspberry Pi", icon: undefined },
    { name: "ESP32", icon: undefined },
    { name: "IoT & Sensors", icon: undefined },
    { name: "PX4", icon: undefined },
    { name: "ArduPilot", icon: undefined },
    { name: "MAVLink", icon: undefined },
    { name: "QGroundControl", icon: undefined },
    { name: "Autonomous Navigation", icon: undefined },
    { name: "Git", icon: undefined },
    { name: "VS Code", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "puttarohithcrazy@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: GITHUB_URL,
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: LINKEDIN_URL,
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:puttarohithcrazy@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Omoikane Innovations Pvt Ltd",
      href: "",
      badges: [],
      location: "",
      title: "Firmware Intern",
      logoUrl: "",
      start: "May 2026",
      end: "Present",
      description:
        "Working on firmware development for embedded and hardware systems.",
    },
    {
      company: "APSSDC",
      href: "https://apssdc.in",
      badges: [],
      location: "Andhra Pradesh, India",
      title: "Machine Learning using Python Intern",
      logoUrl: "",
      start: "May 2026",
      end: "Jul 2026",
      description:
        "Completed a Machine Learning internship with the Andhra Pradesh State Skill Development Corporation, building ML models in Python.",
    },
  ],
  education: [
    {
      school: "VEMU Institute of Technology, Chittoor",
      href: "https://www.vemu.org",
      degree: "B.Tech – Computer Science (Artificial Intelligence) · CGPA 8.41",
      logoUrl: "",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "VISTRA",
      href: GITHUB_URL,
      dates: "",
      active: true,
      description:
        "AI-based accident detection system using video and audio analysis, with automatic drone-based emergency response.",
      technologies: [
        "Python",
        "Computer Vision",
        "Audio Analysis",
        "Deep Learning",
        "UAV",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "UGV Off-road Segmentation",
      href: GITHUB_URL,
      dates: "",
      active: true,
      description:
        "Built an off-road segmentation model for unmanned ground vehicles using DINOv2, improving IoU and obstacle detection.",
      technologies: ["Python", "PyTorch", "DINOv2", "Computer Vision"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Crop & Fertilizer Recommendation Chatbot",
      href: GITHUB_URL,
      dates: "",
      active: true,
      description:
        "An AI-based Python chatbot that recommends suitable crops, fertilizers, and next-crop rotation.",
      technologies: ["Python", "Machine Learning", "Chatbot"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Real-Time Emotion Detection",
      href: GITHUB_URL,
      dates: "",
      active: true,
      description:
        "A Python OpenCV tool that identifies emotions (Happy / Neutral) from a live webcam feed using Haar cascade models.",
      technologies: ["Python", "OpenCV", "Haar Cascades"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Aarohan – IIT Bombay Techfest",
      dates: "",
      location: "IIT Bombay, Mumbai",
      description: "Finalist in the Viksit Bharat 2047 track.",
      image: "",
      links: [] as HackathonLink[],
    },
    {
      title: "Project Expo 2K26",
      dates: "2026",
      location: "VEMU Institute of Technology",
      description:
        "Winner — presented an innovative engineering project.",
      image: "",
      links: [] as HackathonLink[],
    },
    {
      title: "International UAI Hackathon 2026",
      dates: "2026",
      location: "Universal AI University",
      description: "Participated in the international AI hackathon.",
      image: "",
      links: [] as HackathonLink[],
    },
    {
      title: "APSSDC (Naipunyam) Hackathon",
      dates: "",
      location: "Andhra Pradesh, India",
      description:
        "Participated in the hackathon conducted by the District Collector.",
      image: "",
      links: [] as HackathonLink[],
    },
  ],
} as const;
