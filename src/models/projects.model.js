// Work entries. `status` mirrors the domain Niel actually works in (approved/pending tags).
export const projects = [
  {
    slug: "bulk-disbursement-console",
    status: "APPROVED",
    title: "Bulk Disbursement Console",
    category: "Fintech · Admin Interface",
    summary:
      "An internal console for managing bulk-disbursement transactions — status-tagged tables, conditional columns, and printable slips.",
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
      "A slot reserved for the next reporting or export-focused build — write-up to follow once it ships.",
    stack: ["React.js", "Ant Design"],
    detail: false,
    href: "#",
  },
  {
    slug: "form-validation-layer",
    status: "PENDING",
    title: "Form & Upload Hardening",
    category: "Internal Tooling",
    summary:
      "A slot reserved for a forms-and-uploads case study — write-up to follow once it ships.",
    stack: ["React.js", "Ant Design"],
    detail: false,
    href: "#",
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
