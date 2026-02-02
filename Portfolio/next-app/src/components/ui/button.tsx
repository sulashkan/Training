interface buttonInterface {
  text: string;
  type: string;
}

export default function Button({ text, type }: buttonInterface) {
  const buttonType = {
    outlined: "bg-transparent border border-white text-white",
    default: "bg-white text-black",
  };

  return <button className={`text-[16px] px-3 py-2`}>{text}</button>;
}
