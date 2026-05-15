type IconName =
  | "cart" | "user" | "medal" | "monitor" | "timer" | "rate"
  | "star" | "chevron" | "play" | "check" | "close" | "search";

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 20, color = "currentColor" }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    cart:    <g><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l3 12h12l2-8H6"/></g>,
    user:    <g><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></g>,
    medal:   <g><circle cx="12" cy="14" r="6"/><path d="M8 2l4 6 4-6"/></g>,
    monitor: <g><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></g>,
    timer:   <g><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/></g>,
    rate:    <g><circle cx="9" cy="20" r="2"/><circle cx="18" cy="20" r="2"/><path d="M2 4h3l3 12h12"/></g>,
    star:    <g><path d="M12 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></g>,
    chevron: <g><path d="M9 6l6 6-6 6"/></g>,
    play:    <g><path d="M8 5v14l11-7z" fill={color} stroke="none"/></g>,
    check:   <g><path d="M4 12l5 5L20 6"/></g>,
    close:   <g><path d="M6 6l12 12M18 6L6 18"/></g>,
    search:  <g><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></g>,
  };

  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
