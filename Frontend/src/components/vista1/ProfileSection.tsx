import Left from './Columnas/Left';
import Rigth from './Columnas/Rigth';



/** layout left column*/
export function ProfileSection() {
  return (
    <section className="relative z-10 mt-4 flex flex-1 items-center justify-between gap-2 sm:mt-6 sm:gap-3 md:mt-8 md:gap-8 lg:static lg:z-20 lg:mt-20 lg:flex-none lg:px-0">
      {/* left column */}
      <Left />
      {/* Right column img */}
      <Rigth />
    </section>
  );
}
