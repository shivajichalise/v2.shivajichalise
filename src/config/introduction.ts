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
          title:
            "FRAMEWORKS/LIBRARIES: Laravel, Bootstrap, Reactjs, Tailwind-CSS, NodeJs, Express",
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
          link: "https://raysmotors.com.np",
          openInNewTab: true,
          title: "Rays Motors (https://raysmotors.com.np)",
          suffix: "",
        },
        {
          type: "link",
          link: "https://mirajfurniture.com.np",
          openInNewTab: true,
          title: "Miraj Furniture (https://mirajfurniture.com.np)",
          suffix: "",
        },
        {
          type: "link",
          link: "https://yakeenkapali.com.np",
          openInNewTab: true,
          title: "Yakeen Kapali (https://yakeenkapali.com.np)",
          suffix: "",
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
