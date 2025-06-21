interface JsonArrowProps {
  isOpened: boolean;
  onClick: () => void;
}

export function JsonArrow({ isOpened, onClick }: JsonArrowProps) {
  return (
    <button
      className="json__arrow secondary-text absolute left-[-20px] text-[14px]"
      onClick={onClick}
      aria-label={isOpened ? "collapse" : "expand"}
      type="button"
    >
      {isOpened ? "⏷" : "⏵"}
    </button>
  )
}
