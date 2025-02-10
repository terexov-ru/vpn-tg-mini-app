import MainInfo from "@/components/MainPage/MainInfo";
import BottomSection from "@/components/MainPage/BottomSection";

export default function HomePage() {
  return (
    <div className="text-white flex flex-col justify-between h-full min-h-screen">
      <div>
        <MainInfo />
      </div>
      <BottomSection />
    </div>
  );
}
