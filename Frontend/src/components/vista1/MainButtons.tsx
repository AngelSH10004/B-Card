import ButtonAnimate from '../ui/buttonanimate';
import ButtonSimple from '../buttons/buttons';

/** Botones principales*/
export function MainButtons() {


  return (
    <footer className="relative z-10 px-4 pt-3 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:z-30 lg:mt-6 lg:mb-auto lg:w-fit lg:px-0 lg:pt-0 lg:pb-0">
      <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:gap-4">
        <ButtonSimple ruta="/contactos" texto="Mis contactos" clases="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-black px-5 text-sm font-semibold text-white transition-transform hover:bg-neutral-900 active:scale-[0.99] sm:h-13 sm:text-base md:h-14 md:text-lg lg:h-11 lg:w-40 lg:px-4 lg:text-sm"/>
        <span aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-black/15" />
        <ButtonAnimate
          TextoPrincipal="Compartir"
          textoFinal="¡¡Datos copiados!!"
        />
      </div>
    </footer>
  );
}
