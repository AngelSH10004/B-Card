import ButtonAnimate from './ui/buttonanimate';
import ButtonSimple from './buttons/buttons';

/** Botones principales*/
export function MainButtons() {


  return (
    <footer className="relative z-10 px-4 pt-3 pb-[max(1.25rem,clamp(1.25rem,4.5dvh,3.5rem),env(safe-area-inset-bottom))] min-[375px]:px-6 md:px-8">
      <div className="flex flex-col gap-2.5">
        <ButtonSimple ruta="/contactos" texto="Mis contactos" clases="flex h-[clamp(44px,6.2dvh,52px)] w-full cursor-pointer items-center justify-center rounded-lg bg-black px-5 text-[clamp(0.92rem,3.8vw,1.02rem)] font-semibold text-white transition-transform hover:bg-neutral-900 active:scale-[0.99]"/>
        <ButtonAnimate
          TextoPrincipal="Compartir"
          textoFinal="¡¡Datos copiados!!"
        />
      </div>
    </footer>
  );
}
