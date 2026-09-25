import { useState, useCallback } from "react";
import { profile } from "../models/profile.model";

/**
 * Handles contact form submission. No backend is wired up in this build,
 * so a successful validation composes a mailto: link — swap `submit`
 * for a real API/service call when one exists.
 */
export function useContactForm() {
  const [status, setStatus] = useState("idle"); // idle | success

  const submit = useCallback((values) => {
    const { name, email, message } = values;
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  }, []);

  const reset = useCallback(() => setStatus("idle"), []);

  return { status: status, actions: {submit, reset} };
}
