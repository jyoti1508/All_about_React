import React from "react";
import UiCard from "./Components/UiCard";

const Appp = () => {
  const employees = [
    {
      profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
      name: "Aarav Sharma",
      available: "available",
      rent: "$55/hr",
      tag1: "UI/UX Designer",
      tag2: "Freelancer",
      tag3: ["UI", "UX", "Photoshop", "+4"],
      about:
        "Creative UI/UX designer passionate about building intuitive, user-friendly interfaces with strong visual consistency.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/11.jpg",
      name: "Mehak Verma",
      available: "",
      rent: "$60/hr",
      tag1: "Mobile Designer",
      tag2: "Epic Coder",
      tag3: ["UI", "UX", "Figma", "+3"],
      about:
        "Mobile designer focused on crafting modern app layouts with smooth interactions and excellent usability.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
      name: "Kunal Singh",
      available: "available",
      rent: "$70/hr",
      tag1: "iOS Developer",
      tag2: "Freelancer",
      tag3: ["Swift", "iOS", "Firebase", "+5"],
      about:
        "Experienced iOS developer delivering scalable, secure, and high-performance applications for Apple platforms.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
      name: "Neha Gupta",
      available: "",
      rent: "$50/hr",
      tag1: "Web Designer",
      tag2: "Creative Thinker",
      tag3: ["HTML", "CSS", "UI", "UX", "+4"],
      about:
        "Web designer creating responsive, visually appealing websites that balance aesthetics and usability.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
      name: "Rahul Mehta",
      rent: "$65/hr",
      available: "",
      tag1: "Full Stack Developer",
      tag2: "Epic Coder",
      tag3: ["React", "Node.js", "MongoDB", "+5"],
      about:
        "Full stack developer experienced in building robust web applications from frontend to backend systems.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/16.jpg",
      name: "Priya Nair",
      available: "available",
      rent: "$58/hr",
      tag1: "Graphic Designer",
      tag2: "Freelancer",
      tag3: ["Photoshop", "Illustrator", "Branding", "+4"],
      about:
        "Graphic designer specializing in brand identity, marketing visuals, and engaging digital creatives.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
      name: "Aditya Patel",
      available: "",
      rent: "$75/hr",
      tag1: "Backend Developer",
      tag2: "Problem Solver",
      tag3: ["Node.js", "SQL", "APIs", "+4"],
      about:
        "Backend developer focused on performance optimization, secure APIs, and scalable server-side architectures.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
      name: "Sneha Roy",
      available: "available",
      rent: "$52/hr",
      tag1: "Content Designer",
      tag2: "Freelancer",
      tag3: ["UX", "Writing", "SEO", "Research", "+3"],
      about:
        "Content designer crafting clear, meaningful content that improves user experience and product clarity.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/men/19.jpg",
      name: "Vikram Joshi",
      available: "",
      rent: "$68/hr",
      tag1: "Android Developer",
      tag2: "Epic Coder",
      tag3: ["Kotlin", "Android", "Firebase", "+5"],
      about:
        "Android developer building reliable, fast, and user-centric mobile applications for diverse audiences.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
      name: "Anubhaw Das",
      available: "available",
      rent: "$75/hr",
      tag1: "Product Designer",
      tag2: "Creative Thinker",
      tag3: ["UI", "UX", "Prototyping", "+4"],
      about:
        "Product designer focused on solving real-world problems through thoughtful design and user research.",
    },
  ];

  return (
    <div className="flex flex-wrap min-h-screen w-full p-2 bg-gray-300 justify-around">
      {employees.map(function (elem) {
        return (
          <UiCard
            dp={elem.profileImage}
            name={elem.name}
            rent={elem.rent}
            profession={elem.tag1}
            workingas={elem.tag2}
            about={elem.about}
            isavailable={elem.available}
            skills={elem.tag3}
          />
        );
      })}
    </div>
  );
};

export default Appp;
