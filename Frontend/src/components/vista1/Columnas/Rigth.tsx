import { fernandoCardData } from '../../../data/cardData';

export default function Rigth() {
    const { persona } = fernandoCardData 
    return (
        <>
    <div className="h-112.5 w-[44%] shrink-0 overflow-hidden bg-neutral-300 sm:h-95 md:h-auto md:w-auto lg:pointer-events-none lg:absolute lg:bottom-0 lg:left-1/2 lg:z-20 lg:h-[78dvh] lg:w-auto lg:-translate-x-1/2 lg:bg-transparent">
      <img
        src={persona.photoMobile}
        alt={persona.photoAlt}
        className="h-full w-full object-cover object-top md:hidden"
      />

      <img
        src={persona.photoTablet}
        alt={persona.photoAlt}
        className="hidden h-full w-full object-cover object-top md:block lg:hidden"
      />

      <img
        src={persona.photoDesktop}
        alt={persona.photoAlt}
        className="hidden h-full w-auto max-w-none object-contain object-bottom lg:block"
      />
    </div>
        </>
    )
}