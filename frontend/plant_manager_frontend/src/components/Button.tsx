interface ButtonProps {
  children: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
