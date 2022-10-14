import clsx from 'clsx';

export function EmptyPlaceholder({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'mt-4 flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-gray-5 p-5 text-center',
        className
      )}
    >
      {children}
    </div>
  );
}
