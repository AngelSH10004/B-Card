import ButtonSimple from "../buttons/buttons";


interface ContactCardProps {
  nameCompany: string;
  name: string;
  lastName: string;
  rol: string;
  iniciales: string;
}

/** Componentes de cards principales */
export function ContactCard({ nameCompany, name, lastName, rol, iniciales }: ContactCardProps) {

  return (
    <article className="border-b border-[#c9c9c9] py-4 backdrop-blur-[2px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F95C4B] text-[13px] font-semibold text-white">
            {iniciales}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-[15px] font-bold leading-tight text-black">
              {nameCompany}
            </h2>
            <p className="mt-0.5 flex flex-wrap items-baseline gap-x-2 text-[13px] leading-snug text-black">
              <span className="font-medium">
                {name} {lastName}
              </span>
              <span className="text-[11.5px] font-normal text-[#555555]">{rol}</span>
            </p>
          </div>
        </div>

        {/* boton de eliminar */}
        <button
          type="button"
          aria-label={`Eliminar a ${name} ${lastName}`}
          className="mt-1 shrink-0 cursor-pointer p-1 text-[#F95C4B] "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4.5 w-4.5"
            aria-hidden="true"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
          </svg>
        </button>
      </div>

      <p className="mt-3 text-[11px] font-medium text-[#555555]">
        Mostrar más...
      </p>

      <ButtonSimple ruta="" texto="Contactar" clases="mt-2.5 flex h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-black px-4 text-[13.5px] font-semibold text-white transition-transform hover:bg-neutral-900 active:scale-[0.99]" />
    </article>
  );
}
