import { useNavigate } from "react-router-dom";

interface ButtonSimpleProps {
    ruta: string;
    texto: string;
    clases?: string;
}

export default function ButtonSimple({ruta, texto, clases}: ButtonSimpleProps){
      const navigate = useNavigate();

    return(
        <button
          onClick={() => navigate(ruta)}
          type="button"
          className={`${clases} `}
        >
          {texto}
        </button>
    )
}