interface InputProps {
  placeholder: string;
  className: string;
}

export default function Input({ placeholder, className }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`bg-secondary focus:outline-none ${className}`}
    />
  );
}
