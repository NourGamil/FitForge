const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
};

function SvgIcon({ children, size = 24, className = "", ...props }) {
  return (
    <svg width={size} height={size} className={className} {...baseProps} {...props}>
      {children}
    </svg>
  );
}

export function Dumbbell(props) {
  return (
    <img src="images/icon.svg" alt="" />
  );
}

export function Menu(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </SvgIcon>
  );
}

export function X(props) {
  return (
    <SvgIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </SvgIcon>
  );
}

export function Search(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </SvgIcon>
  );
}

export function ArrowRight(props) {
  return (
    <SvgIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </SvgIcon>
  );
}

export function ArrowUpRight(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </SvgIcon>
  );
}

export function Play(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 5v14l11-7-11-7Z" />
    </SvgIcon>
  );
}

export function ShieldCheck(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </SvgIcon>
  );
}

export function TimerReset(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 2h4" />
      <path d="M12 14v-4" />
      <path d="M12 22a8 8 0 1 0-6.2-13" />
      <path d="M5 4v5h5" />
    </SvgIcon>
  );
}

export function CheckCircle2(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.3 2.3L16 9" />
    </SvgIcon>
  );
}

export function Clock3(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </SvgIcon>
  );
}

export function Signal(props) {
  return (
    <SvgIcon {...props}>
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 20V4" />
    </SvgIcon>
  );
}

export function Sparkles(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3 10.5 8.5 5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
      <path d="M19 15v4" />
      <path d="M21 17h-4" />
      <path d="M5 3v3" />
      <path d="M6.5 4.5h-3" />
    </SvgIcon>
  );
}

export function Flame(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 22c4 0 7-2.8 7-6.7 0-2.9-1.7-5.2-4.7-7.9-.8 2.3-2 3.5-3.4 4.4.2-2.8-.8-5.4-3-7.8C7.2 7 5 10.2 5 15.2 5 19.2 8 22 12 22Z" />
    </SvgIcon>
  );
}

export function HeartPulse(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l4.2-4.2" />
      <path d="M3 13h4l2-4 3 8 2-4h7" />
    </SvgIcon>
  );
}

export function Zap(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" />
    </SvgIcon>
  );
}

export function Quote(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 11H5a3 3 0 0 1 3-3V5a6 6 0 0 0-6 6v6h6v-6Z" />
      <path d="M22 11h-3a3 3 0 0 1 3-3V5a6 6 0 0 0-6 6v6h6v-6Z" />
    </SvgIcon>
  );
}

export function Star(props) {
  return (
    <SvgIcon {...props}>
      <path d="m12 2 3.1 6.4 6.9 1-5 4.8 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.4l6.9-1L12 2Z" />
    </SvgIcon>
  );
}

export function CalendarDays(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </SvgIcon>
  );
}

export function CalendarCheck(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="m8 16 2 2 5-5" />
    </SvgIcon>
  );
}

export function Mail(props) {
  return (
    <SvgIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </SvgIcon>
  );
}

export function MapPin(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </SvgIcon>
  );
}

export function Phone(props) {
  return (
    <SvgIcon {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </SvgIcon>
  );
}

export function Send(props) {
  return (
    <SvgIcon {...props}>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </SvgIcon>
  );
}
