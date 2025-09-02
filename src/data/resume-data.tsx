import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cihan Güllü",
  location: "Kocaeli, Gebze",
  locationLink: "https://www.google.com/maps/place/Gebze+Kocaeli",
  about: "Full Stack Developer",
  summary:
    "I am a fullstack developer with 7 years of experience. I started my career with C# and .NET Core. Then, I gained experience in web services, background services and similar subjects. Afterwards, I experienced in popular frameworks like Blazor, React.js and Next.js. I am currently continuing to work as a full stack developer. When I have time, I try to improve myself in DDD and microservices.",
  personalWebsiteUrl: "https://github.com/cihangll",
  contact: {
    email: "cihangullu54@gmail.com",
    tel: "+90 543 580 38 34",
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
      title: "Senior FullStack Java Developer",
      start: "2024",
      end: "2025",
      description:
        "Technologies: JAVA, Spring Boot, Apache Kafka, Redis, PostgreSQL, ReactJs, NextJs, Docker ",
    },
    {
      company: "BilgeAdam Technology",
      link: "https://www.bilgeadam.com/",
      badges: ["Remote"],
      title: "Senior FullStack Dotnet Developer",
      start: "2022",
      end: "2024",
      description:
        "Develop the kariyer.garantibbva.com.tr application and be part of the HCM project infrastructure in Next.js project. Technologies: C#, .NET Core, EF Core, MSSQL, ReactJs, NextJs, Redux, Redis, RabbitMQ, Docker ",
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
      link: "",
      badges: ["In Office"],
      title: "",
      start: "2020",
      end: "2021",
      description: "",
    },
    {
      company: "Ivme Bilisim",
      link: "",
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
    "JAVA",
    "Spring Boot",
    "Apache Kafka",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "Workflow App - BilgeAdam",
      techStack: ["JAVA", "Spring Boot 3", "NextJs", "Apache Kafka", "PostgreSQL", "Redis Cache", "Mongo DB"],
      description: "Internal workflow application for process management",
    },
    {
      title: "HCM Portal NextJs - BilgeAdam",
      techStack: ["C#", ".NET 8", "ReactJs", "NextJs"],
      description: "I contributed to developing the frontend infrastructure during the migration of the HCM portal application to Next.js, focusing on performance optimization and scalability.",
    },
    {
      title: "Kariyer GarantiBBVA - BilgeAdam",
      techStack: ["C#", ".NET 8", ".NET MVC", "ReactJs"],
      description: "Career application where users can apply to job adverts and manage the application process. I contributed to the development of new modules and pages.",
      link: {
        label: "Kariyer GarantiBBVA",
        href: "https://kariyer.garantibbva.com.tr/",
      },
    },
    {
      title: "ArgeMAS Erp App - ArgeMAS",
      techStack: ["C#", '.NET Framework', "Devexpress", "MSSQL", "TSQL"],
      description: "Internal ERP Application. I participated in developing the MRP module for the ERP system.",
    },
    {
      title: "Senguller Integration App - İvme Bilişim",
      techStack: ["C#", ".NET 6", "Blazor", "EF Core", "MSSQL"],
      description: "Web Api application that transfers data to the logo using background services and endpoints.",
    },
    {
      title: "KACUV Integration Web API - İvme Bilişim",
      techStack: ["C#", '.NET 3.1', '.NET MVC', "MSSQL", "TSQL"],
      description: "Web Api application that transfers data to the logo using endpoints.",
    },
    {
      title: "Job Tracking App - İvme Bilişim",
      techStack: ["C#", '.NET 3.1', '.NET MVC', "MSSQL", "TSQL"],
      description: "A web application that automatically converts emails into jobs, allowing users to manage, track, and generate reports for these jobs.",
    },
  ],
  customProjects: [
    {
      title: "Turkuaz Integration App",
      techStack: ["C#", ".NET", "NextJs","ABP Framework", "EF Core", "MSSQL", "OpenIdDict"],
      description: "Web Api and UI application that transfers data between Logo and external web api using background services and endpoints.",
    },
    {
      title: "Product Tracking App",
      techStack: ["C#", ".NET", "Blazor", "SignalR", "EF Core", "MSSQL"],
      description: "Web Api and UI application for product definition and tracking.",
    }
  ],
  individualProjects: [
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
      title: "KariyerNet Recruitment App",
      techStack: [
        "C#",
        ".NET",
        "Docker",
        "Blazor",
        "PostgreSQL",
        "RabbitMQ",
        "ABP Framework",
      ],
      description: "TestCase Application",
      link: {
        label: "github.com",
        href: "https://github.com/cihangll/KariyerNet.Recruitment",
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
      techStack: ["C#", ".NET", "EF Core"],
      description: "An example project with entityframework relationships.",
      link: {
        label: "github.com",
        href: "https://github.com/cihangll/EfCoreRelationships",
      },
    }
  ]
} as const;
