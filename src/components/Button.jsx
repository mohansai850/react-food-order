export default function Button({ children, textOnly, className, ...props }) {
  const buttonCss = textOnly
    ? `text-button ${className}`
    : `button ${className}`;
  return (
    <button className={buttonCss} {...props}>
      {children}
    </button>
  );
}
