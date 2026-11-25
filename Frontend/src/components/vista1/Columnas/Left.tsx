import { fernandoCardData } from '../../../data/cardData';
import ButtonAnimate from '../../ui/buttonanimate';


export default function Left() {
    const {persona, contacto} = fernandoCardData

  return (
    <>
      <div className="flex min-w-0 flex-1 flex-col pl-4 pr-1 sm:pl-6 md:pl-8 lg:z-30 lg:flex-none lg:max-w-md lg:pl-0">
        <h2 className="text-2xl font-extrabold leading-[1.03] tracking-[-0.02em] text-black sm:text-3xl md:text-4xl lg:text-4xl lg:whitespace-nowrap xl:text-5xl">
          {persona.name}
          <br className="lg:hidden" />{' '}
          {persona.lastName}
        </h2>
        <p className="mt-1.5 text-xs font-medium leading-[1.35] text-[#2a2a2a] sm:text-sm md:mt-2 md:text-base lg:mt-2 lg:text-base">
          {persona.rol}
          <br />
          de{' '}
          <span className="font-bold tracking-[0.01em] text-[#DE4C3C]">
            {persona.company}
          </span>
        </p>

        {/* Nav principal dos botones */}
        <nav
          className="mt-3.5 flex w-full text-[#000000] max-w-52.5 flex-col gap-2 sm:mt-4 sm:gap-2.5 md:mt-6 md:max-w-72 md:gap-3 lg:absolute lg:top-8 lg:right-14 lg:z-30 lg:mt-0 lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:gap-4"
        >
          <ButtonAnimate
            onClick={() => navigator.clipboard.writeText(contacto.email)}
            TextoPrincipal={
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4 lg:h-3.5 lg:w-3.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span className="min-w-0 truncate">{contacto.email}</span>
              </>
            }
            textoFinal="¡Copiado!"
            clases="h-7 w-full justify-start rounded-[5px] px-2 text-xs font-medium sm:h-8 sm:px-2.5 md:h-10 md:px-3.5 md:text-sm lg:order-2 lg:h-9 lg:w-52 lg:justify-center lg:px-4 lg:text-xs"
          />

          <ButtonAnimate
            onClick={() => navigator.clipboard.writeText(contacto.phone)}
            TextoPrincipal={
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4 lg:h-3.5 lg:w-3.5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="min-w-0 truncate">{contacto.phone}</span>
              </>
            }
            textoFinal="¡Copiado!"
            clases="h-7 w-full justify-start rounded-[5px] px-2 text-xs font-medium sm:h-8 sm:px-2.5 md:h-10 md:px-3.5 md:text-sm lg:order-1 lg:h-9 lg:w-52 lg:justify-center lg:px-4 lg:text-xs"
          />
        </nav>
      </div>
    </>

    
  )
}