import { profile } from "../../../models/profile.model.js";
import StatusTag from "../common/StatusTag.jsx";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-3 font-mono text-[12px] tracking-wide text-slate">
          <StatusTag status="APPROVED" />
          <span>OPEN TO FRONTEND DEVELOPER ROLES</span>
        </div>

        <p className="font-mono text-[13px] tracking-[0.08em] text-slate">HELLO, I&apos;M</p>

        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
          {profile.name}
        </h1>

        {/* Centered portrait — the focal point of the hero, framed like a data card */}
        <div className="relative my-10 sm:my-12">
          <span className="corner-tick -top-2 -left-2 border-t-2 border-l-2" />
          <span className="corner-tick -top-2 -right-2 border-t-2 border-r-2" />
          <span className="corner-tick -bottom-2 -left-2 border-b-2 border-l-2" />
          <span className="corner-tick -bottom-2 -right-2 border-b-2 border-r-2" />
          <div className="h-56 w-56 overflow-hidden rounded-full border border-line bg-paper-dim shadow-[0_1px_0_0_theme(colors.line)] sm:h-72 sm:w-72">
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <ul className="flex flex-col gap-6 w-8 h-8 absolute top-38 -left-24">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="hover:text-[#26973B]">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
          {profile.role} <span className="text-slate">— {profile.focus}</span>
        </h2>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate sm:text-base">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="bg-ink px-6 py-3 font-mono text-[12px] font-medium tracking-wide rounded-[8px] text-paper transition-colors hover:bg-ink-soft"
          >
            VIEW THE WORK
          </a>
          <a
            href="#contact"
            className="border border-ink px-6 py-3 font-mono text-[12px] font-medium tracking-wide rounded-[8px] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
