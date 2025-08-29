import { ButtonHTMLAttributes, forwardRef } from "react";

const HeroButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          bg-white 
          text-black 
          border-2 
          border-black 
          hover:bg-netgen-accent
          hover:text-white
          hover:border-netgen-accent
          px-8 
          py-6 
          text-lg 
          font-medium 
          rounded-3xl
          flex 
          items-center 
          justify-center 
          gap-2 
          transition-all 
          duration-300 
          hover:-translate-y-0.5
          shadow-md
          hover:shadow-lg
          active:scale-95
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

HeroButton.displayName = "HeroButton";

export { HeroButton };
