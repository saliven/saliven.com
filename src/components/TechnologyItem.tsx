interface Props {
  icon: React.ReactNode;
  name: React.ReactNode;
}

export function TechnologyItem({ icon, name }: Props) {
  return (
    <div className="flex items-center space-x-4 rounded-lg border border-gray-4 border-opacity-30 bg-opacity-30 p-2 transition-colors duration-200 hover:bg-gray-2/95">
      <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-4 bg-gray-3 text-white">
        {icon}
      </div>
      <div>{name}</div>
    </div>
  );
}
