interface Input {
  placeholder: string;
  className: string;
}

export default function Input({ placeholder, className }: Input) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`bg-secondary focus:outline-none ${className}`}
    />
  );
}
