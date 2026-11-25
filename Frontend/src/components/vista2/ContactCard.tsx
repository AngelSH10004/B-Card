import { useState } from "react";
import ButtonAnimate from "../ui/buttonanimate";


interface ContactCardProps {
  nameCompany: string;
  name: string;
  lastName: string;
  rol: string;
  iniciales: string;
}

/** Componentes de cards principales */
export function ContactCard({ nameCompany, name, lastName, rol, iniciales }: ContactCardProps) {
  const [activo, setactivo] = useState(true);

  if (!activo){
    return null
  }
  return (
    <article className="border-b border-[#c9c9c9] py-4 backdrop-blur-[2px]">
      <div className="flex items-start justify-between">
        <div className="flex min-w-0 items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F95C4B] text-xs font-semibold text-white sm:text-sm md:text-base">
            {iniciales}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-base font-bold leading-tight text-black sm:text-lg md:text-xl">
              {nameCompany}
            </h2>
            <p className="mt-0.5 flex flex-col items-baseline gap-x-2 text-sm leading-snug text-black md:text-base">
              <span className="font-medium">
                {name} {lastName}
              </span>
              <span className="text-xs font-normal text-[#555555] md:text-sm">{rol}</span>
            </p>
          </div>
        </div>

        {/* boton de eliminar */}
        <button
          onClick={()=>setactivo(false)}
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



      <ButtonAnimate
        TextoPrincipal="Contactar"
        textoFinal="¡¡Datos copiados!!"
        variant="dark"
        clases="mt-4 h-11 w-full rounded-lg px-4 text-sm md:h-12 md:text-base lg:h-11 lg:text-sm"
      />
    </article>
  );
}
