import { Row, Col } from "antd";
import { focusAreas } from "../../../models/focusAreas.model.js";

export default function FocusAreas() {
  return (
    <section id="focus" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[12px] tracking-wide text-slate">02 / FOCUS</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Where I spend my time
        </h2>

        <Row gutter={[1, 1]} className="mt-12 border border-line bg-line">
          {focusAreas.items.map((area) => (
            <Col key={area.id} xs={24} sm={12} className="bg-black p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4 p-4">
                <h3 className="font-display text-lg font-semibold text-ink">{area.title}</h3>
                <span className="shrink-0 font-mono text-[11px] font-semibold tracking-wide text-approved">
                  {area.tag}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-slate p-4">{area.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
