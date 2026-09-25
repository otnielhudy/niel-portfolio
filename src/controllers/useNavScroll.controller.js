import { useEffect, useState, useCallback } from "react";

const SECTION_IDS = ["home", "about", "focus", "work", "contact"];

/**
 * Tracks scroll position to highlight the active nav section and toggle
 * the compact/mobile navbar state. Keeps that logic out of the view.
 */
export function useNavScroll() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  return { activeSection, isScrolled, drawerOpen, actions: {openDrawer, closeDrawer}};
}
