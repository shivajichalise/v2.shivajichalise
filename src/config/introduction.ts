import ContentProps from "../types/ContentProps";

const introduction: ContentProps[] = [
  {
    title: "Name",
    description: "shivajichalise - trying to be something, one line at a time",
    points: null,
  },
  {
    title: "Synopsis",
    description: "shivaji [OPTIONS]....",
    points: null,
  },
  {
    title: "Description",
    description:
      "Shivaji, a software engineering student on a mission to be a strong problem solver. He is currently experimenting with tech to figure out his jam.",
    points: null,
  },
  {
    title: "Tech Stack",
    description:
      "The tech stack outlines the programming languages, frameworks, libraries, and tools that Shivaji is familiar with.",
    points: {
      type: "disc",
      data: [
        {
          type: "text",
          link: "",
          openInNewTab: false,
          title: "PROGRAMMING LANGUAGES: JS, PHP, Python",
          suffix: "",
        },
        {
          type: "text",
          link: "",
          openInNewTab: false,
          title: "FRAMEWORKS/LIBRARIES: Laravel, React , Node.js, Express.js",
          suffix: "",
        },
        {
          type: "text",
          link: "",
          openInNewTab: false,
          title: "DATABASES: MySQL, MongoDB",
          suffix: "",
        },
        {
          type: "text",
          link: "",
          openInNewTab: false,
          title: "TOOLS: Git, Linux",
          suffix: "",
        },
      ],
    },
  },
  {
    title: "Projects",
    description: "",
    points: {
      type: "disc",
      data: [
        {
          type: "link",
          link: "https://app.pokharamarathon.org/user/login",
          openInNewTab: true,
          title:
            "Pokhara Marathon (https://app.pokharamarathon.org/user/login)",
          suffix:
            "Admin dashboard to manage users, race registrations, certificates etc.",
        },
        {
          type: "link",
          link: "https://raysmotors.com.np",
          openInNewTab: true,
          title: "Rays Motors (https://raysmotors.com.np)",
          suffix: "A web app for ISUZU vehicle showroom.",
        },
        {
          type: "link",
          link: "https://mirajfurniture.com.np",
          openInNewTab: true,
          title: "Miraj Furniture (https://mirajfurniture.com.np)",
          suffix: "A static website for Miraj Furnitures.",
        },
        {
          type: "link",
          link: "https://yakeenkapali.com.np",
          openInNewTab: true,
          title: "Yakeen Kapali (https://yakeenkapali.com.np)",
          suffix: "Personal website for my friend.",
        },
        {
          type: "link",
          link: "https://github.com/shivajichalise/eventmate",
          openInNewTab: true,
          title: "EventMate (https://github.com/shivajichalise/eventmate)",
          suffix: "Event Management System",
        },
        {
          type: "link",
          link: "https://github.com/shivajichalise/snippysnapysuu",
          openInNewTab: true,
          title:
            "Snippy Snappy Suu (https://github.com/shivajichalise/snippysnapysuu)",
          suffix: "A code snippet web app.",
        },
        {
          type: "link",
          link: "https://github.com/shivajichalise/bolanabola",
          openInNewTab: true,
          title: "Bola na bola (https://github.com/shivajichalise/bolanabola)",
          suffix: "A dead simple real time chat application.",
        },
      ],
    },
  },
  {
    title: "Environment",
    description: "",
    points: {
      type: "disc",
      data: [
        {
          type: "text",
          link: "",
          openInNewTab: false,
          title: "Device: M1 Macbook Air",
          suffix: "",
        },
        {
          type: "text",
          link: "",
          openInNewTab: false,
          title: "OS: MacOS",
          suffix: "",
        },
        {
          type: "text",
          link: "",
          openInNewTab: false,
          title: "Terminal Emulator: iTerm2",
          suffix: "",
        },
        {
          type: "text",
          link: "",
          openInNewTab: false,
          title: "Text Editor: NeoVim",
          suffix: "",
        },
      ],
    },
  },
  {
    title: "Exit Status",
    description: "shivaji exists 0 on success, and cries if an error occurs.",
    points: null,
  },
];

export default introduction;
