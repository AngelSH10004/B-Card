
export function MainTitle() {
  return (
    <header className="relative z-10 flex flex-col items-center px-4 pt-8 text-center sm:px-6 sm:pt-10 md:pt-14 lg:pt-30">
      <h1 className="font-brand bg-linear-to-b bg-black bg-clip-text text-[3.75rem] leading-[0.95] tracking-[-0.02em] text-transparent select-none sm:text-[4.5rem] md:text-[5.75rem] lg:text-[10rem] lg:leading-[0.88] xl:text-[13.5rem] 2xl:text-[16rem]">
        Gartaris
      </h1>
      <p className="max-w-[320px] text-xs font-semibold leading-[1.35] text-[#1a1a1a] sm:text-sm md:max-w-md md:text-base lg:hidden">
        Movemos tu negocio hacia un futuro más <br /> limpio.
      </p>
    </header>
  );
}
