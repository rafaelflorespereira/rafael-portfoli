import Link from "next/link";
export default function Button() {
  return (
    <Link
      href={"#"}
      className="bg-slate-50 rounded-2xl px-8 py-1 text-slate-600 m-4 text-sm :hover:bg-slate-100 :hover:text-slate-700 :hover:shadow-md"
    >
      Contact me
    </Link>
  );
}
