import { Drawer, Grid } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavScroll } from "../../../controllers/useNavScroll.controller.js";
import { profile } from "../../../models/profile.model.js";

const { useBreakpoint } = Grid;

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "focus", label: "Focus" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { activeSection, isScrolled, drawerOpen, actions } = useNavScroll();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        isScrolled ? "bg-black backdrop-blur border-b border-line" : "bg-black border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="font-display text-[17px] font-semibold tracking-tight text-white">
          {profile.shortName}
          <span className="text-approved">.</span>
        </Link>

        {!isMobile && (
          <ul className="flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`font-mono text-[12px] tracking-wide transition-colors ${
                    activeSection === link.id ? "text-soft-green" : "text-white hover:underline"
                  }`}
                >
                  {activeSection === link.id ? "· " : ""}
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!isMobile ? (
          <a
            href="#contact"
            className="border border-white px-4 py-2 font-mono text-[12px] font-medium tracking-wide text-white transition-colors hover:bg-soft-green hover:text-paper rounded-[4px]"
          >
            LET&apos;S TALK
          </a>
        ) : (
          <button
            type="button"
            aria-label="Open menu"
            onClick={actions.openDrawer}
            className="flex h-10 w-10 items-center justify-center border border-line text-ink"
          >
            <MenuOutlined />
          </button>
        )}
      </nav>

      <Drawer
        placement="right"
        onClose={actions.closeDrawer}
        open={drawerOpen}
        closeIcon={<CloseOutlined />}
        width={280}
        styles={{ body: { padding: 0 }, header: { borderBottom: "1px solid #e2e5ea" } }}
        title={<span className="font-display font-semibold text-ink">Menu</span>}
      >
        <ul className="flex flex-col">
          {LINKS.map((link) => (
            <li key={link.id} className="border-b border-line">
              <a
                href={`#${link.id}`}
                onClick={actions.closeDrawer}
                className="block px-6 py-4 font-mono text-sm tracking-wide text-ink"
              >
                {link.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </Drawer>
    </header>
  );
}
