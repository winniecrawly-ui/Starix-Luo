import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-[10px] font-normal uppercase tracking-[0.35em] text-ink/40">
        404
      </p>
      <h1 className="mt-4 text-3xl font-normal tracking-[-0.02em] text-ink md:text-4xl">
        This frame does not exist.
      </h1>
      <Link
        href="/"
        className="mt-10 text-[11px] font-normal uppercase tracking-[0.3em] text-ink/50 transition-opacity hover:opacity-70"
      >
        Return home
      </Link>
    </div>
  );
}
