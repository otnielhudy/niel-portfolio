// Central profile data. Edit this file to update name, role, and hero copy site-wide.
import portrait from "../assets/images/niel-portrait.png";
import resume from "../assets/documents/CV_Otniel_Hudy_PPP.pdf";
import GithubIcon from "../assets/svg/github_brands_solid_full.svg?react";
import LinkedInIcon from "../assets/svg/linkedin_in_brands_solid_full.svg?react";
import EmailIcon from "../assets/svg/email.svg?react";

export const profile = {
  name: "Otniel Hudy",
  shortName: "Niel",
  role: "Frontend Developer",
  focus: "React.js · Mobile development using Flutter",
  location: "Indonesia",
  portrait,
  tagline:
    "I build the screens where money moves — transaction dashboard for fintech company and landing page for agriculture company",
  summary:
    "Frontend developer focused on React.js admin financial products: single transaction management, bulk transaction management, status-driven data tables, and the small reliability details, clean uploads, exportable records — that keep an ops team's day running. Also landing page for agriculture company",
  email: "nielhudy@gmail.com",
  resumeUrl: resume,
  socials: [
    { icon: <GithubIcon/>,label: "GitHub", href: "https://github.com/otnielhudy" },
    { icon: <LinkedInIcon/>,label: "LinkedIn", href: "https://www.linkedin.com/in/otniel-hudy-3b45a0106/" },
    { icon: <EmailIcon/>,label: "Email", href: "mailto:nielhudy@gmail.com" },
  ],
};
