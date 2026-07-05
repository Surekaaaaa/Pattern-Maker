import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-pink-300",

    secondary:
      "bg-white text-pink-600 border border-pink-200 hover:bg-pink-50",

    outline:
      "border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;