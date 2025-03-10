import { nanoid } from "nanoid";
import {
  FaHome,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BsFileEarmarkPerson } from "react-icons/bs";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoRedux,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiSpring,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", title: "home", icon: <FaHome /> },
  { id: nanoid(), href: "#skills", title: "skills", icon: <FaTools /> },
  { id: nanoid(), href: "#projects", title: "projects", icon: <HiLightBulb /> },
  {
    id: nanoid(),
    href: "#about",
    title: "about",
    icon: <BsFileEarmarkPerson />,
  },
];

export const techSkills = [
  {
    id: nanoid(),
    title: "HTML",
    icon: <FaHtml5 />,
    text: "HTML is the standard markup language for creating Web pages.",
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: <FaCss3Alt />,
    text: "CSS is the language we use to style a Web page.",
  },
  {
    id: nanoid(),
    title: "javascript",
    icon: <BiLogoJavascript />,
    text: "JavaScript is the Programming Language for the Web.",
  },
  {
    id: nanoid(),
    title: "typeScript",
    icon: <SiTypescript />,
    text: "TypeScript is a syntactic superset of JavaScript which adds static typing.",
  },
  {
    id: nanoid(),
    title: "react",
    icon: <BiLogoReact />,
    text: "A JavaScript library for building user interfaces.",
  },
  {
    id: nanoid(),
    title: "next js",
    icon: <SiNextdotjs />,
    text: "Next.js is a React framework for building web applications. It's a popular, open-source framework that's used by many large companies.",
  },
  {
    id: nanoid(),
    title: "tailwind css",
    icon: <BiLogoTailwindCss />,
    text: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
  },
  {
    id: nanoid(),
    title: "redux",
    icon: <BiLogoRedux />,
    text: "Redux is simply a store to store the state of the variables in your app.",
  },

  {
    id: nanoid(),
    title: "java",
    icon: <FaJava />,
    text: "Java is a programming language that is used to create applications for mobile, web, and enterprise software.",
  },
  {
    id: nanoid(),
    title: "spring",
    icon: <SiSpring />,
    text: "Spring is an open-source framework for building Java applications. It's a popular choice for developing enterprise-level applications.",
  },
  {
    id: nanoid(),
    title: "spring boot",
    icon: <SiSpringboot />,
    text: "Spring Boot is an open-source framework that helps developers create web applications and microservices using Java. It's an extension of the Spring framework that simplifies the process of setting up Spring applications.",
  },
  {
    id: nanoid(),
    title: "node js",
    icon: <FaNodeJs />,
    text: "Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server. It's used to create web applications, command line tools, and scripts.",
  },
  {
    id: nanoid(),
    title: "express js",
    icon: <SiExpress />,
    text: "Express is a fast, unopinionated, minimalist web framework for Node.js, providing a robust set of features for web and mobile applications.",
  },
  {
    id: nanoid(),
    title: "mongoDB",
    icon: <SiMongodb />,
    text: "MongoDB is an open-source database that stores data in JSON documents instead of tables.",
  },
];

export const projects = [
  {
    id: nanoid(),
    title: "Travel Town Holidays",
    websiteURL: "https://traveltownholidays.com/",
    githubURL: "https://github.com/Saleemtravel/traveltownholidays",
    imgs: [
      {
        imgURL: "/assets/images/traveltownholiday-1.PNG",
        blurHash: "L7RDN5}[9Z?H16M{^jR+16Z$IVMx",
      },
      {
        imgURL: "/assets/images/traveltownholiday-2.PNG",
        blurHash: "LECGb[x]018_~q%h9FE0O^$,nzIT",
      },
      {
        imgURL: "/assets/images/traveltownholiday-3.PNG",
        blurHash: "L6P7La00:z=|000K}Pkq07iGNsxa",
      },
    ],
    techStack: ["react", "styled components"],
  },
  {
    id: nanoid(),
    title: "Travel Town Holidays V1",
    websiteURL: "https://traveltownholidays-backup.netlify.app/",
    githubURL: "https://github.com/Mahammed-Shoheb/traveltownholidays-backup",
    imgs: [
      {
        imgURL: "/assets/images/traveltownholiday-backup-1.PNG",
        blurHash: "LXFFR19Y%2M|gls*kCoK?F%MIpt6",
      },
      {
        imgURL: "/assets/images/traveltownholiday-backup-2.PNG",
        blurHash: "LEN-Ayx[v}r^03axRQWB~XR6X-Sd",
      },
      {
        imgURL: "/assets/images/traveltownholiday-backup-3.PNG",
        blurHash: "L3LXc0p300?Y0001^*-g000h-o9E",
      },
    ],
    techStack: ["HTML", "CSS", "javascript", "bootstrap"],
  },
  {
    id: nanoid(),
    title: "tic tac toe",
    websiteURL: "https://tic-tac-toe-game-by-shoheb.netlify.app/",
    githubURL: "https://github.com/Mahammed-Shoheb/tic-tac-toe",
    imgs: [
      {
        imgURL: "/assets/images/tic-tac-toe-1.PNG",
        blurHash: "LNR3Wqof~nofx.fQN2aztQfQRPfP",
      },
      {
        imgURL: "/assets/images/tic-tac-toe-2.PNG",
        blurHash: "LNR3Wqof_Kof%HayN3aytQj[RPj@",
      },
      {
        imgURL: "/assets/images/tic-tac-toe-3.PNG",
        blurHash: "LORC[Iof_Kof%GfQN2fQx[fQRPfP",
      },
    ],
    techStack: ["react"],
  },
  {
    id: nanoid(),
    title: "recipe DB",
    websiteURL: "https://recipe-db-by-shoheb.netlify.app/",
    githubURL: "https://github.com/Mahammed-Shoheb/recipeDB",
    imgs: [
      {
        imgURL: "/assets/images/recipe-db-1.PNG",
        blurHash: "LkRCxlofx^j].Ta#RObGDhjZxuoL",
      },
      {
        imgURL: "/assets/images/recipe-db-2.PNG",
        blurHash: "LlQJZUoz%NWBWCoeayaz?wWBMxkC",
      },
      {
        imgURL: "/assets/images/recipe-db-3.PNG",
        blurHash: "LNQTAb4m?I?w?aoeV@WV%i%hW-IT",
      },
    ],
    techStack: ["react", "react query"],
  },
  {
    id: nanoid(),
    title: "to do app",
    websiteURL: "https://to-do-app-by-shoheb.netlify.app/",
    githubURL: "https://github.com/Mahammed-Shoheb/todo_app",
    imgs: [
      {
        imgURL: "/assets/images/to-do-app-1.PNG",
        blurHash: "L1R3Wt_2_NM;0Boe?cIY00Iar}-%",
      },
      {
        imgURL: "/assets/images/to-do-app-2.PNG",
        blurHash: "L2RC_S-:_4ok0Foc?bN20CRonVt1",
      },
      {
        imgURL: "/assets/images/to-do-app-3.PNG",
        blurHash: "L1RMf2_2?vRt0It5?cIY05N1%5%F",
      },
    ],
    techStack: ["react"],
  },
  {
    id: nanoid(),
    title: "cart project",
    websiteURL: "https://cart-project-by-shoheb.netlify.app/",
    githubURL: "https://github.com/Mahammed-Shoheb/cart-project",
    imgs: [
      {
        imgURL: "/assets/images/cart-project-1.PNG",
        blurHash: "L4SPkURj-;~q0BM|WExt0ExuIU9G",
      },
      {
        imgURL: "/assets/images/cart-project-2.PNG",
        blurHash: "L0SZ94?c.8~q009axvxu009aD%xu",
      },
      {
        imgURL: "/assets/images/cart-project-3.PNG",
        blurHash: "L3M@v6Rj4T.708NGWXxa00oz~qMy",
      },
    ],
    techStack: ["react", "redux", "tailwind CSS"],
  },
  {
    id: nanoid(),
    title: "assiduus dashboard",
    websiteURL: "https://assiduus-dashboard-by-shoheb.netlify.app/",
    githubURL: "https://github.com/Mahammed-Shoheb/assiduus",
    imgs: [
      {
        imgURL: "/assets/images/assiduus-dashboard-1.PNG",
        blurHash: "L2SZ5@gx9YtQ~qxa0J0JNG0cXjx[",
      },
      {
        imgURL: "/assets/images/assiduus-dashboard-2.PNG",
        blurHash: "L5NAxIXO00t7%MofE0EJ00In~qX5",
      },
      {
        imgURL: "/assets/images/assiduus-dashboard-3.PNG",
        blurHash: "L1SimfLA5O5N_MNF0J00E10JE^^+",
      },
    ],
    techStack: ["react", "d3 JS", "tailwind CSS"],
  },
  {
    id: nanoid(),
    title: "youTube clone",
    websiteURL: "https://youtube-clone-by-shoheb.netlify.app/",
    githubURL: "https://github.com/Mahammed-Shoheb/youtube-clone",
    imgs: [
      {
        imgURL: "/assets/images/youtube-clone-1.PNG",
        blurHash: "LGP?,Z~qxu_4-=ocRjRP-:RjV@M|",
      },
      {
        imgURL: "/assets/images/youtube-clone-2.PNG",
        blurHash: "LZONa+M|?H%L?^$yRNM|4ot8%Mof",
      },
      {
        imgURL: "/assets/images/youtube-clone-3.PNG",
        blurHash: "LhNTzYD$_3M|ITRjt7ay~q%MIUs:",
      },
    ],
    techStack: ["react", "material UI", "rapid API"],
  },
  {
    id: nanoid(),
    title: "codepen clone",
    websiteURL: "https://codepen-clone-by-shoheb.netlify.app/",
    githubURL: "https://github.com/Mahammed-Shoheb/codepen_clone",
    imgs: [
      {
        imgURL: "/assets/images/codepen-1.PNG",
        blurHash: "L0L#5[~qIU~q009F%M9F00%MIU%M",
      },
      {
        imgURL: "/assets/images/codepen-2.PNG",
        blurHash: "L0LqhI=|8w=y00E1?bE100.SOr.8",
      },
      {
        imgURL: "/assets/images/codepen-3.PNG",
        blurHash: "L1IF0p$*Mx$*00M{x]M{_4x]S3x]",
      },
    ],
    techStack: ["react", "react codemirror2"],
  },
];

export const socialLinks = [
  {
    id: nanoid(),
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/mahammed-shoheb-b82a14150",
  },
  {
    id: nanoid(),
    icon: <FaGithub />,
    href: "https://github.com/Mahammed-Shoheb",
  },
  {
    id: nanoid(),
    icon: <FaInstagram />,
    href: "https://www.instagram.com/mahammed_shoheb/",
  },
  {
    id: nanoid(),
    icon: <FaWhatsapp />,
    href: "https://wa.me/919686879898",
  },
];
