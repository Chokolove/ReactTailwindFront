interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "submit" | "button" | "reset" | undefined;
}
function Button({ text, className, style, onClick, type="button", ...rest }: Props & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={`bg-gray-700 text-white py-2 px-4 rounded-sm hover:opacity-80 transition duration-300 ease-in-out ${className}`}
      style={style}
      type={type}
      onClick={onClick}
      {...rest}>
      {text}
    </button>
  )
}

export default Button
