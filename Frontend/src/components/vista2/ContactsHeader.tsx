import { useNavigate } from "react-router-dom";


interface PropsContacHeader {
  busqueda: string;
  onBuscar: (valor: string) => void;
}

/** Header principal de la vista de contactos. */
export function ContactsHeader({ busqueda, onBuscar }: PropsContacHeader) {
  const navigate = useNavigate();
  return (
    <header className="px-5 pt-[clamp(1.25rem,4.5dvh,2.75rem)] min-[375px]:px-6 md:px-8">
      <div className="flex items-center gap-3.5">
        <button
        onClick={() => navigate('/')}
          type="button"
          aria-label="Volver"
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-black"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </button>

        <div className="flex h-11.5 flex-1 items-center gap-2.5 rounded-[14px] bg-black px-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 shrink-0 text-[#9b9b9b]"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => onBuscar(e.target.value)}
            placeholder="Busca nombres o empresas..."
            aria-label="Busca nombres o empresas"
            className="min-w-0 w-full bg-transparent text-[13.5px] text-white outline-none placeholder:text-[#9b9b9b]"
          />
          {busqueda && (
            <button
              type="button"
              onClick={() => onBuscar('')}
              aria-label="Limpiar búsqueda"
              className="shrink-0 cursor-pointer p-0.5 text-white transition-opacity hover:opacity-75"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <h1 className="mt-6 text-[22px] font-bold tracking-[-0.01em] text-black">
        Contactos
      </h1>
      <div className="mt-3 h-px w-full bg-[#c9c9c9]" />
    </header>
  );
}
