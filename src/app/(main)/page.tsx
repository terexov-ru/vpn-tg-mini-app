import MainInfo from "@/components/MainPage/MainInfo";
import BottomSection from "@/components/MainPage/BottomSection";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col gap-[160px] justify-between h-full">
        <div>
          <Header text="Главная" className="mb-8" />
          <MainInfo />
        </div>
        <BottomSection />
      </section>
    </>
  );
}
