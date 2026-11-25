import decoracionFondo from '../assets/decoracionFondoV2.svg';

export function BackgroundDecoration() {
  return (
    <img
      src={decoracionFondo}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-30"
    />
  );
}
