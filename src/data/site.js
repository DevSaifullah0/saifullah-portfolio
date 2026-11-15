export const contact = {
  name: "Saifullah",
  email: "saifullahshaikh634@gmail.com",
  linkedin: "https://www.linkedin.com/in/saifullah-507754372/",
  github: "https://github.com/DevSaifullah0",
  location: "Karachi, Pakistan",
  resume: "/resume/My Resume.docx.pdf",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    label: "GitHub",
    href: contact.github,
    external: true,
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    href: contact.linkedin,
    external: true,
  },
  {
    name: "Email",
    label: "Email",
    href: `mailto:${contact.email}`,
    external: false,
  },
];
