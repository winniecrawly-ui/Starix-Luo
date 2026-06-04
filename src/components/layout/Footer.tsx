export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-canvas px-5 py-8 md:px-10">
      <p className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400">
        © {new Date().getFullYear()} Starix Luo
      </p>
    </footer>
  );
}
