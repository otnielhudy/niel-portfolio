const TONE = {
  APPROVED: { fg: "#157a54", bg: "#e4f3ec" },
  PENDING: { fg: "#b4780a", bg: "#fbf0dd" },
  REJECTED: { fg: "#9c2b2b", bg: "#f6e4e4" },
};

/**
 * Small ledger-style status label — a direct nod to the transaction-status
 * tags Niel builds in his own dashboards (approved / pending / rejected).
 */
export default function StatusTag({ status = "PENDING" }) {
  const tone = TONE[status] ?? TONE.PENDING;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide"
      style={{ color: tone.fg, backgroundColor: tone.bg }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: tone.fg }} />
      {status}
    </span>
  );
}
