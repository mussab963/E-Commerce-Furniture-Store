function Button({
  type = "button",
  color = "secondary",
  onClick,
  onclick,
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary: {
      primary: `
        bg-[#C900C1]
        text-white
        border-transparent

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:shadow-[0_10px_30px_rgba(201,0,193,0.35)]
      `,

      secondary: `
        bg-black
        text-white
        border-transparent

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
      `,

      black: `
        bg-black
        text-white
        border-transparent

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
      `,
    },

    outline: {
      primary: `
    bg-white
    text-[#C900C1]
    border-[#C900C1]

    hover:-translate-y-1
    hover:scale-[1.01]
    hover:shadow-[0_10px_30px_rgba(201,0,193,0.25)]
  `,

      secondary: `
        bg-white
        text-black
        border-black

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:bg-black
        hover:text-white
      `,

      black: `
        bg-white
        text-black
        border-black

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:bg-black
        hover:text-white
      `,
    },
  };

  const buttonStyle = styles[variant]?.[color] ?? styles.primary.secondary;

  return (
    <button
      type={type}
      onClick={onClick || onclick}
      className={`
        relative
        overflow-hidden

        border
        rounded-full
        py-2
        px-5

        transition-all
        duration-800
        ease-out

        active:translate-y-0
        active:scale-[0.97]

        ${buttonStyle}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
