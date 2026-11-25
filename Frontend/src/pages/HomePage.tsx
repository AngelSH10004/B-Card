import { MainButtons } from '../components/MainButtons';
import { BackgroundDecoration } from '../components/BackgroundDecoration';
import { MainTitle } from '../components/MainTitle';
import { ProfileSection } from '../components/ProfileSection';

/** Primera vista B-Card*/
export function HomePage() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col overflow-x-hidden bg-[#EDEDED]">
      <BackgroundDecoration />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full flex-1 flex-col justify-between md:max-w-180">
        <MainTitle />

        <ProfileSection />

        <MainButtons />
      </div>
    </main>
  );
}
