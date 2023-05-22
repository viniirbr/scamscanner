interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={`w-full mb-3 max-w-xs border-gray-200 rounded-md border-solid border-2 hover:ring-2 hover:ring-blue-300 transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
}
