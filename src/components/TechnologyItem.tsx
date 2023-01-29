interface Props {
  icon: React.ReactNode;
  name: React.ReactNode;
}

export function TechnologyItem({ icon, name }: Props) {
  return (
    <div className="group flex cursor-pointer items-center space-x-4 rounded-lg border border-white/0 bg-opacity-90 p-2 transition-all duration-200 hover:border-gray-4 hover:bg-gray-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-6 bg-gray-4 text-white">
        {icon}
      </div>
      <div className="transition-all duration-200 group-hover:text-gray-12">
        {name}
      </div>
    </div>
  );
}
