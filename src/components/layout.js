import localFont from "next/font/local";
import Link from "next/link";

const satoshi = localFont({
  src: "../../public/Satoshi-Variable.ttf",
});

export function Layout({ children }) {
  return (
    <div
      className={`${satoshi.className} flex flex-col gap-16 p-8 max-w-5xl bg-white mx-auto min-h-screen`}
    >
      <header className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-bold">Store</h1>
        </Link>

        <nav>
          <Link href="/cart">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
        </nav>
      </header>

      {children}

      <footer className="text-center text-sm text-neutral-600">
        &#169; {new Date().getFullYear()} Store. All rights reserved.
      </footer>
    </div>
  );
}
