export default function ActiveInfoCard({
  title,
  description,
  buttonText,
}: {
  title: string;
  description: React.ReactNode;
  buttonText?: string;
}) {
  return (
    <div className="relative bg-accent px-5 py-6 rounded-[16px] flex items-center justify-between w-full">
      <div>
        <h2 className="text-lg/5 font-medium tracking-wide mb-1 text-white">{title}</h2>
        <div className="text-sm font-normal text-gray-300">{description}</div>
      </div>
      {buttonText && (
        <button className="bg-white px-[18px] py-3 rounded-[60px] text-black text-sm font-medium hover:bg-gray-200 transition shadow-md">
          {buttonText}
        </button>
      )}
    </div>
  );
}
