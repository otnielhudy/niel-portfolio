import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "./ArrowUpRightIcon.jsx";
import { projects } from "../../../models/projects.model.js";
import StatusTag from "../common/StatusTag.jsx";

export default function Work() {
  return (
    <section id="work" className="border-t border-line bg-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[12px] tracking-wide text-white">03 / WORK</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-light-cream sm:text-4xl">
          Selected work
        </h2>

        <Row gutter={[24, 24]} className="mt-12">
          {projects.map((project) => {
            const CardInner = (
              <div className="flex h-full flex-col justify-between border border-line p-7 transition-colors hover:border-sky-blue sm:p-8 rounded-[4px]">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-[11px] tracking-wide text-white">{project.category}</p>
                    <StatusTag status={project.status} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-light-cream">{project.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white">{project.summary}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-sm bg-paper-dim px-2 py-1 font-mono text-[11px] text-slate"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {project.detail && (
                    <span className="inline-flex items-center gap-1 font-mono text-[12px] font-medium text-ink">
                      READ CASE STUDY <ArrowUpRightIcon />
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <Col key={project.slug} xs={24} md={project.detail ? 24 : 12}>
                {project.detail ? (
                  <Link to={`/work/${project.slug}`} className="block h-full">
                    {CardInner}
                  </Link>
                ) : (
                  <div className="h-full opacity-70">{CardInner}</div>
                )}
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
