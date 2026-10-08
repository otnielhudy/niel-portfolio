import { profile } from "../../../models/profile.model.js";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black px-5 py-8 text-paper sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-[11px] tracking-wide text-white sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        {/* <ul className="flex gap-6">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} className="hover:text-paper">
                {social.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </footer>
  );
}
