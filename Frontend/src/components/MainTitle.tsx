
export function MainTitle() {
  return (
    <header className="relative z-10 flex flex-col items-center px-4 pt-[clamp(1.25rem,5.5dvh,3.5rem)] text-center sm:px-6">
      <h1 className="font-brand bg-linear-to-b from-[#000000] from-35% via-[#000000] via-60% to-[#d9d9d9] bg-clip-text text-[clamp(2.85rem,15.5vw,4.35rem)] leading-[0.95] tracking-[-0.02em] text-transparent select-none">
        Gartaris
      </h1>
      <p className=" max-w-[320px] text-[clamp(0.72rem,3.1vw,0.88rem)] font-semibold leading-[1.35] text-[#1a1a1a]">
        Movemos tu negocio hacia un futuro más <br /> limpio.
      </p>
    </header>
  );
}
