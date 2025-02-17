import MainInfo from "@/components/MainPage/MainInfo";
import BottomSection from "@/components/MainPage/BottomSection";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <div className="text-white flex flex-col justify-between h-full">
      <Header text="Главная"/>
      <div>
        <MainInfo />
      </div>
      <BottomSection />
    </div>
  );
}
