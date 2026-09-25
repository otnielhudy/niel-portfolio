import { Row, Col } from "antd";
import { profile } from "../../../models/profile.model.js";
import { skillGroups } from "../../../models/skills.model.js";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Row gutter={[48, 40]}>
          <Col xs={24} md={11}>
            <p className="font-mono text-[12px] tracking-wide text-slate">01 / ABOUT</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              I build the interfaces ops teams trust with real transactions.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate">{profile.summary}</p>
          </Col>

          <Col xs={24} md={13}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {skillGroups.items.map((group) => (
                <div key={group.id}>
                  <p className="font-mono text-[11px] font-semibold tracking-wide text-slate">
                    {group.label.toUpperCase()}
                  </p>
                  <ul className="mt-3 space-y-2 border-l border-line pl-4">
                    {group.items.map((item) => (
                      <li key={item} className="text-[14px] text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
