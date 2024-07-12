export default function Button({
  children,
  href,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}>) {
  return (
    <a
      className="my-4 px-8 py-2 group  box-content border-2 border-transparent hover:border-2  hover:border-primary-200 rounded-3xl text-nowrap"
      href={href}
      onClick={onClick}
    >
      <p className="font-bold bg-gradient-to-r from-primary-200 from-0% via-black via-70% to-primary-200 to-75% bg-transition bg-left bg-clip-text text-transparent ease-out duration-500 transition-all group-hover:bg-right delay-300">
        {children}
      </p>
    </a>
  );
}
