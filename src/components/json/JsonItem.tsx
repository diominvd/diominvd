interface JsonItemProps {
  value: any;
  label?: string;
}

export function JsonItem({ value, label }: JsonItemProps) {
  let out = typeof value === "string" ? `"${value}"` : value;
  if (value === null) out = "null";
  return (
    <span className="text-[14px]">
      {label ? <span className="primary-text">{`"${label}": `}</span> : ""}
      <span className="secondary-text">{out}</span>
    </span>
  );
}