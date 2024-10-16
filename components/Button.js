import Image from "next/image";

const Button = ({ type, title, icon, variant }) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}

      <label htmlFor="title" className="bold-16 whitespace-nowrap">
        {" "}
        {title}
      </label>
    </button>
  );
};

export default Button;
