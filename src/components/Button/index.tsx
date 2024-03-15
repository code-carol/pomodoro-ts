interface BtnProps {
  className: string;
  id: string;
  children: string;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "submit" | "reset" | "button";
}

const Button = ({ className, id, children, handleOnClick, type }: BtnProps) => {
  return (
    <>
      <button className={className} id={id} onClick={handleOnClick} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;
