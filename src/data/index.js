import {
    psmAlgorithm,
    reactJobs,
    videoWebsite,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "hero",
      title: "Hero",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "lookingup株式会社",
      date: "2024 - current",
      details: [
        "Developed and managed technologies for the marketing company <span style='color: white;'>lookingup株式会社</span>.",
      ],
    },
  ];
  
  const portfolio = [
    {
      name: "React jobs website",
      description:
        "A job search website built using React, with a focus on performance and accessibility.",
      image: reactJobs,
    },
    {
      name: "PSM Calculator",
      description:
        "An algorithm made to calculate the PSM value of the inserted data",
      image: psmAlgorithm,
    },
    {
      name: "Video Website",
      description:
        "A video website based on popular, already existing websites",
      image: videoWebsite,
    },
  ];
  
  export { experiences, portfolio };