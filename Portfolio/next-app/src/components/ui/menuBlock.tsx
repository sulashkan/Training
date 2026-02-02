interface MenuBlockProps {
  title: string;
  items: string[];
}

export default function MenuBlock({ title, items }: MenuBlockProps) {
  return (
    <div>
      <h3 className="font-semibold mb-3 text-black">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="cursor-pointer text-black hover:underline">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
