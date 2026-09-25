import { useParams, Link, Navigate } from "react-router-dom";
import { getProjectBySlug } from "../../models/projects.model.js";
import StatusTag from "../components/common/StatusTag.jsx";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project || !project.detail) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link to="/#work" className="font-mono text-[12px] tracking-wide text-slate hover:text-ink">
          ← BACK TO WORK
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <StatusTag status={project.status} />
          <p className="font-mono text-[12px] tracking-wide text-slate">{project.category}</p>
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-slate">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-sm bg-paper-dim px-2 py-1 font-mono text-[11px] text-slate">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-12 border-t border-line pt-10">
          <p className="font-mono text-[11px] font-semibold tracking-wide text-slate">THE PROBLEM</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink">{project.problem}</p>
        </div>

        <div className="mt-10">
          <p className="font-mono text-[11px] font-semibold tracking-wide text-slate">THE APPROACH</p>
          <ol className="mt-4 space-y-4">
            {project.approach.map((step, index) => (
              <li key={step} className="flex gap-4 border-l border-line pl-4">
                <span className="font-mono text-[12px] text-slate-light">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[14px] leading-relaxed text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
