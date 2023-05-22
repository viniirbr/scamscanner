interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Grid({ children, className }: Props) {
  return (
    <div
      className={`grid w-full justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:justify-between ${className}`}
    >
      {children}
    </div>
  );
}
