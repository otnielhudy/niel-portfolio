// Work entries. `status` mirrors the domain Niel actually works in (approved/pending tags).
export const projects = [
  {
    slug: "bulk-disbursement-console",
    status: "APPROVED",
    title: "Single & Bulk Disbursement Console",
    category: "Fintech · Admin Interface",
    summary:
      "An internal console for managing single & bulk-disbursement transactions — status-tagged tables, conditional columns, printable slips & filtering data.",
    stack: ["React.js", "Ant Design", "jsPDF"],
    problem:
      "Operations staff needed to review large batches of disbursement transactions at a glance, act on them by status, and produce a paper trail without the interface breaking on messy API data.",
    approach: [
      "Built dynamic table columns with a ColumnGenerators pattern, so column sets adjust to transaction type instead of branching in the render tree.",
      "Rendered transaction status (approved, rejected, pending) as color-mapped Ant Design Tags, resolving field-name mismatches between the UI and API responses.",
      "Generated PDF disbursement slips with jsPDF, adding a `safe()` coercion helper so undefined or null recipient fields no longer crashed generation.",
      "Hardened the file-upload flow against undefined entries from Ant Design's Upload component with `.filter(Boolean)` guards in the reducer.",
    ],
    detail: true,
    href: "#",
  },
  {
    slug: "reporting-exports",
    status: "PENDING",
    title: "Reporting & Exports",
    category: "Internal Tooling",
    summary:
      "An action to export data from the admin console to CSV, with a reporting dashboard for tracking export history and status.",
    stack: ["React.js", "sheetjs-style"],
    detail: false,
    href: "#",
  },
  {
    slug: "form-validation-layer",
    status: "PENDING",
    title: "Form & Upload File Validation",
    category: "Internal Tooling",
    summary:
      "Make Form validation with Ant Design and upload file validation",
    stack: ["React.js", "Ant Design"],
    detail: false,
    href: "#",
  },
  {
    slug: "mobile-development-layer",
    status: "PENDING",
    title: "Mobile Development",
    category: "Mobile",
    summary:
      "Mobile development with flutter UI and integration with backend API",
    stack: ["Flutter", "Dart", "Firebase"],
    detail: false,
    href: "#",
  },
  {
    slug: "landing-page-website-layer",
    status: "PENDING",
    title: "Landing Page Development",
    category: "Web Development",
    summary:
      "Web development with React.js to build landing page for agritech company",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    detail: false,
    href: "#",
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
