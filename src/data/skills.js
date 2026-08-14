export const skillGroups = [
  {
    title: "Mobile Development",
    description:
      "Core technologies I use to build modern mobile applications.",
    skills: [
      "React Native CLI",
      "React Navigation",
      "NativeWind",
      "AsyncStorage",
    ],
  },

  {
    title: "Frontend Development",
    description:
      "Technologies I use to build responsive and interactive user interfaces.",
    skills: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Frontend Integration",
    description:
      "Tools and services I use to connect mobile interfaces with real application data.",
    skills: [
      "REST APIs",
      "Axios",
      "Supabase Integration",
      "Authentication Integration",
    ],
  },

  {
    title: "Development Tools",
    description:
      "Tools I use during development, testing and version control.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
    ],
  },
];

export const skills = skillGroups.flatMap((group) => group.skills);