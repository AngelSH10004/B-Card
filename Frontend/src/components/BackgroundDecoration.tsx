import decoracionFondo from '../assets/decoracionFondoV2.svg';
import decoracionPC from '../assets/DecoracionPC.svg';

export function BackgroundDecoration() {
  return (
    <picture className="pointer-events-none absolute inset-0 block h-full w-full select-none">
      <source media="(min-width: 1024px)" srcSet={decoracionPC} />
      <img
        src={decoracionFondo}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover opacity-30 lg:opacity-10"
      />
    </picture>
  );
}
