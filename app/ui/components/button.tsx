export default function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button
      className="my-4 px-8 py-2 group  box-content border-2 border-transparent hover:border-2  hover:border-slate-200 rounded-3xl text-nowrap"
      type="submit"
    >
      <p className="font-bold bg-gradient-to-r from-slate-200 from-0% via-black via-70% to-slate-200 to-75% bg-transition bg-left bg-clip-text text-transparent ease-out duration-500 transition-all group-hover:bg-right delay-300">
        {children}
      </p>
    </button>
  );
}
