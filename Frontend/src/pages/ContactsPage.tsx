import { useState } from 'react';
import noEncontrado from '../assets/Noencontrado.svg';
import { BackgroundDecoration } from '../components/BackgroundDecoration';
import ButtonSimple from '../components/buttons/buttons';
import { ContactCard } from '../components/vista2/ContactCard';
import { ContactsHeader } from '../components/vista2/ContactsHeader';
import { ContactsData } from '../data/contactsData';

/** Segunda vista Contacts*/
export default function ContactsPage() {
  const [busqueda, setBusqueda] = useState('');
  const texto = busqueda.trim().toLowerCase();

  const contacts = Object.entries(ContactsData).filter(([, filtro]) =>
    `${filtro.name} ${filtro.lastName} ${filtro.nameCompany}`.toLowerCase().includes(texto),
  );

  return (
    <main className="relative flex min-h-dvh w-full flex-col overflow-x-hidden bg-[#EDEDED]">
      <BackgroundDecoration />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full flex-1 flex-col md:max-w-180">
        <ContactsHeader busqueda={busqueda} onBuscar={setBusqueda} />

        <section className="flex flex-1 flex-col px-5 pb-8 min-[375px]:px-6 md:px-8">
          {contacts.length > 0 ? (
            contacts.map(([key, contact]) => (
              <ContactCard
                key={key}
                nameCompany={contact.nameCompany}
                name={contact.name}
                lastName={contact.lastName}
                rol={contact.rol}
                iniciales={contact.iniciales}
              />
            ))
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center pb-12 pt-8 text-center">
              <img
                src={noEncontrado}
                alt="Contacto no encontrado"
                className="h-auto w-[clamp(130px,42vw,169px)] select-none"
              />
              <p className="mt-6 max-w-58.75 text-[13.5px] font-medium leading-[1.35] text-black">
                Parece que este contacto aún no está en tu lista
              </p>
              <ButtonSimple
                ruta="/"
                texto="Regresar"
                clases="mt-6 flex h-[clamp(44px,6.2dvh,52px)] w-full cursor-pointer items-center justify-center rounded-lg bg-black px-5 text-[clamp(0.92rem,3.8vw,1.02rem)] font-semibold text-white transition-transform hover:bg-neutral-900 active:scale-[0.99]"
              />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
