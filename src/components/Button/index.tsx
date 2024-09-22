interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}
function Button({ text, className, style }: Props) {
  return (
    <button
      className={`bg-gray-700 text-white py-2 px-4 rounded-sm hover:opacity-80 transition duration-300 ease-in-out ${className}`}
      style={style}>
      {text}
    </button>
  )
}

export default Button
