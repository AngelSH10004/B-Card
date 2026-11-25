import { MainButtons } from '../components/vista1/MainButtons';
import { BackgroundDecoration } from '../components/BackgroundDecoration';
import { MainTitle } from '../components/vista1/MainTitle';
import { ProfileSection } from '../components/vista1/ProfileSection';

/** Primera vista B-Card*/
export function HomePage() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col overflow-x-hidden bg-[#EDEDED] lg:h-dvh lg:overflow-hidden">
      <BackgroundDecoration />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full flex-1 flex-col justify-between lg:max-w-360 lg:justify-start lg:px-14">
        <MainTitle />

        <ProfileSection />

        <MainButtons />
      </div>
    </main>
  );
}
