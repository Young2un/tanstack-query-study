import Link from "next/link";

export default function MainButton() {
  return (
    <Link
      href="/"
      className="inline-block rounded px-4 py-2 text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition"
    >
      ⬅ 메인으로
    </Link>
  );
}
