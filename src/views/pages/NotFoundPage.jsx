import { Link } from "react-router-dom";
import StatusTag from "../components/common/StatusTag.jsx";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <StatusTag status="REJECTED" />
      <h1 className="mt-5 font-display text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 max-w-sm text-[14px] text-slate">
        This route doesn&apos;t resolve to a page — check the address, or head back home.
      </p>
      <Link
        to="/"
        className="mt-8 border border-ink px-6 py-3 font-mono text-[12px] font-medium tracking-wide text-ink hover:bg-ink hover:text-paper"
      >
        BACK HOME
      </Link>
    </section>
  );
}
