import  { fernandoCardData } from '../data/cardData';



/** layout left column*/
export function ProfileSection() {
  const {persona, contacto} = fernandoCardData
  return (
    <section className="relative z-10 mt-[clamp(0.75rem,3dvh,2.25rem)] flex flex-1 items-center justify-between gap-2 min-[400px]:gap-3 md:gap-8 md:px-8">
      {/* left column */}
      <div className="flex min-w-0 flex-1 flex-col pl-4 pr-1 min-[375px]:pl-6 min-[412px]:pl-8 md:pl-0">
        <h2 className="text-[clamp(1.5rem,7.5vw,2.25rem)] font-extrabold leading-[1.03] tracking-[-0.02em] text-black">
          {persona.name}
          <br />
          {persona.lastName}
        </h2>
        <p className="mt-1.5 text-[clamp(0.625rem,2.7vw,0.82rem)] font-medium leading-[1.35] text-[#2a2a2a]">
          {persona.rol}
          <br />
          de{' '}
          <span className="font-bold tracking-[0.01em] text-[#DE4C3C]">
            {persona.company}
          </span>
        </p>
        <div className="mt-[clamp(0.75rem,2.4dvh,1.25rem)] flex w-full max-w-52.5 flex-col gap-2 min-[375px]:gap-2.5">
          <a
            className="inline-flex h-[clamp(26px,4dvh,32px)] w-full items-center gap-1.5 rounded-[5px] border border-[#9b9b9b] bg-transparent px-2 text-[clamp(0.58rem,2.55vw,0.74rem)] font-medium text-[#222222] transition-colors hover:border-black hover:bg-black/5 min-[375px]:gap-2 min-[375px]:px-2.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 shrink-0 text-[#222222]"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span className="min-w-0 truncate">{contacto.email}</span>
          </a>

          <a
            className="inline-flex h-[clamp(26px,4dvh,32px)] w-full items-center gap-1.5 rounded-[5px] border border-[#9b9b9b] bg-transparent px-2 text-[clamp(0.58rem,2.55vw,0.74rem)] font-medium text-[#222222] transition-colors hover:border-black hover:bg-black/5 min-[375px]:gap-2 min-[375px]:px-2.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 shrink-0 text-[#222222]"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="min-w-0 truncate">{contacto.phone}</span>
          </a>
        </div>
      </div>

      {/* Right column img */}
      <div className="h-[clamp(250px,49dvh,470px)] w-[44%]  shrink-0 overflow-hidden bg-neutral-300 ">
        <img
          src={persona.photoUrl}
          alt={persona.photoAlt}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
