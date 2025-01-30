import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Harziiz",
  DESCRIPTION:
    "Welcome to Akanbi AbdulAzeez's, portfolio, this resource contains details you need to know about Harziiz as a Software Developer and Engineer.",
  AUTHOR: "Akanbi AbdulAzeez",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "mail@akanbiazeez117.me",
    HREF: "mailto:mail@akanbiazeez117.me",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Harziiz712",
    HREF: "https://github.com/harziz712",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Akanbi AbdulAzeez",
    HREF: "https://www.linkedin.com/in/akanbiazeez/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "HarziizDevps",
    HREF: "https://x.com/harziizdevps",
  },
];
