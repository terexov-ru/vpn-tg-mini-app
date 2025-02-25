export default function InfoCard({
  title,
  description,
  buttonText,
}: {
  title: string;
  description: React.ReactNode;
  buttonText?: string;
}) {
  return (
    <div className="relative bg-white-6 backdrop-blur-[12px] px-5 py-6 rounded-[16px] flex items-center justify-between w-full">
      <div>
        <h2 className="text-[22px]/[22px] font-medium mb-1 text-white">{title}</h2>
        <div className="text-sm/[22px] font-normal text-baseGray">{description}</div>
      </div>
      {buttonText && (
        <button className="bg-accent px-[18px] py-3 rounded-[60px] text-white text-sm font-medium hover:bg-accent transition shadow-md">
          {buttonText}
        </button>
      )}
    </div>
  );
}
