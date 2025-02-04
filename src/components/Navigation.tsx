import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-around bg-gray-900 p-2 fixed bottom-0 w-full max-w-[800px]">
      <Link
        href="/"
        className="flex flex-col items-center text-gray-400 hover:text-white"
      >
        <span>🏠</span>
        <span>Home</span>
      </Link>
      <Link
        href="/payment"
        className="flex flex-col items-center text-gray-400 hover:text-white"
      >
        <span>💳</span>
        <span>Payment</span>
      </Link>
      <Link
        href="/support"
        className="flex flex-col items-center text-gray-400 hover:text-white"
      >
        <span>❓</span>
        <span>Support</span>
      </Link>
    </nav>
  );
}
