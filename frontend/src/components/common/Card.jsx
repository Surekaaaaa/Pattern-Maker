function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        p-6
        shadow-lg
        border
        border-pink-100
        hover:shadow-xl
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;