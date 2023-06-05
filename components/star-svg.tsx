/* eslint-disable max-len */
export default function StarSvg({
  color = "primary-xDark",
  isNotFilled = false,
  size,
  strokeWidth = 6,
  className,
  id,
}: {
  color?: "primary" | "primary-dark" | "primary-xDark";
  isNotFilled?: boolean;
  size?: string;
  strokeWidth?: number;
  className?: string;
  id?: string;
}) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 1263 1263"
      fill={!isNotFilled ? `var(--color-${color})` : "none"}
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontSize: size }}
      className={className}
      id={id}
    >
      <path
        d="M35.1052 634.419C496.065 621.128 618.864 468.825 630.934 1C640.473 462.083 742.309 634.22 1186.73 636.342C1211.45 635.529 1237.2 635.138 1264 635.142C1237.16 636.053 1211.42 636.46 1186.73 636.342C736.873 651.13 624.943 805.616 630.934 1264C623.79 778.69 499.571 628.126 35.1052 634.419C23.9364 634.741 12.5691 634.981 1 635.142C12.5673 634.812 23.9346 634.57 35.1052 634.419Z"
        stroke={!isNotFilled ? `none` : `var(--color-${color})`}
        strokeWidth={strokeWidth}
      />
      <path
        d="M630.934 1C618.571 480.16 490.05 628.324 1 635.142C493.528 621.077 623.618 767.018 630.934 1264C624.614 780.424 749.532 635.067 1264 635.142C753.907 652.451 641.003 487.693 630.934 1Z"
        stroke={
          !isNotFilled ? `var(--color-${color})` : `var(--color-${color})`
        }
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
