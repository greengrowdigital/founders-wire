import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function SectionHead({
  label,
  sub,
  to,
  toLabel,
}: {
  label: string;
  sub?: string;
  to?: string;
  toLabel?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <h2 className="hed text-[1.5rem] sm:text-[1.9rem]">{label}</h2>
        {sub && <p className="dek mt-1.5 text-[0.95rem]">{sub}</p>}
      </div>
      {to && toLabel && (
        <Link
          to={to}
          className="kicker shrink-0 text-accent inline-flex items-center gap-1.5 group whitespace-nowrap"
        >
          {toLabel}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
