import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cihan Güllü",
  location: "Kocaeli, Gebze",
  locationLink: "https://www.google.com/maps/place/Gebze+Kocaeli",
  about: "Full Stack Developer",
  summary:
    "I am a fullstack developer with 6 years of experience. I started my career with C# and .NET Core. Then, I gained experience in web services, background services and similar subjects. Afterwards, I experienced in populer frameworks like Blazor, React.js and Next.js. I am currently continuing to work as a full stack developer. When I have time, I try to improve myself in DDD and microservices.",
  personalWebsiteUrl: "https://github.com/cihangll",
  contact: {
    email: "cihangullu54@gmail.com",
    tel: "+905435803834",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cihangll",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cihangullu/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Süleyman Demirel University",
      degree: "Bachelor of Science in Computer Engineering",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "BilgeAdam Technology",
      link: "https://www.bilgeadam.com/",
      badges: ["Remote"],
      title: "Senior FullStack Developer",
      start: "2022",
      end: null,
      description:
        "Develop the kariyer.garantibbva.com.tr application and be part of the HCM project infrastructure in Next.js project. Technologies: .NET Core, EF Core, MSSQL, ReactJs, NextJs, Redux, Redis, RabbitMQ, Docker ",
    },
    {
      company: "Arge Bilisim",
      link: "https://www.argebilisim.com/argemas/",
      badges: ["In Office"],
      title: "Full Stack Developer",
      start: "2021",
      end: "2022",
      description:
        "Develop in the company's MRP application. Technologies: .NET Core, EF Core, MSSQL, TSQL, Devexpress, SignalR",
    },
    {
      company: "Deniz Kuvvetleri Komutanligi",
      badges: ["In Office"],
      start: "2020",
      end: "2021",
    },
    {
      company: "Ivme Bilisim",
      badges: ["In Office"],
      title: "Full Stack Developer",
      start: "2017",
      end: "2020",
      description:
        "I developed web services required by the company, as well as background services and integration projects. Technologies: .NET Core, EF Core, Web API, Hangfire, MSSQL, TSQL, RabbitMQ, SignalR, Logo Rest API, Logo Object, Logo Flow",
    },
  ],
  skills: [
    "C#",
    ".NET",
    "NextJs",
    "EF Core",
    "ABP Framework",
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "Redis",
    "RabbitMQ",
    "SignalR",
    "Docker",
    "Blazor",
    "Elastic Search",
    "MSSQL",
    "TSQL",
    "Hangfire",
    "Devexpress",
    "Dapper",
  ],
  projects: [
    {
      title: "Database Comparison",
      techStack: ["C#", ".NET", "Blazor", "MudBlazor", "Dapper"],
      description:
        "MSSQL Database Comparison with .NET 6, Blazor Server, Dapper and Mudblazor.",
      link: {
        label: "github.com",
        href: "https://github.com/cihangll/MsSQLDatabaseComparison",
      },
    },
    {
      title: "aspnetcore-serilog-seq-docker-githubaction",
      techStack: ["C#", ".NET", "Serilog", "Docker", "Seq", "Github Actions"],
      description:
        "Sample application including Logging, Serilog, Seq, Docker and Github Action",
      link: {
        label: "github.com",
        href: "https://github.com/gelis-tr-io/makaleler/blob/master/csharp/serilog-seq-docker-githubaction/serilog-seq-docker-githubaction.md",
      },
    },
    {
      title: "WorkerServiceDemo",
      techStack: ["C#", ".NET", "Worker Services", "Serilog", "Dapper"],
      description:
        "It is a windows service project that runs at specified times. You can find the installation and usage documentation in the Readme.md file at the project address.",
      link: {
        label: "github.com",
        href: "https://github.com/cihangll/WorkerServiceDemo",
      },
    },
    {
      title: "EfCoreRelationships",
      techStack: ["C#", ".NET", "EF CORe"],
      description: "An example project with entityframework relationships.",
      link: {
        label: "github.com",
        href: "https://github.com/cihangll/EfCoreRelationships",
      },
    },
    {
      title: "Kariyer GarantiBBVA",
      techStack: ["C#", ".NET", "ReactJs"],
      description: "",
      link: {
        label: "Kariyer GarantiBBVA",
        href: "https://kariyer.garantibbva.com.tr/",
      },
    },
  ],
} as const;
