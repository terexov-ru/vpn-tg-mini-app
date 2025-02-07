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
    <div className="relative bg-[#6F40DC] backdrop-blur-lg px-4 py-5 rounded-xl flex items-center justify-between text-white shadow-lg w-full">
      <div>
        <h2 className="text-base font-semibold tracking-wide">{title}</h2>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      {buttonText && (
        <button className="bg-white px-5 py-2 rounded-full text-black text-sm font-normal hover:bg-gray-200 transition shadow-md">
          {buttonText}
        </button>
      )}
    </div>
  );
}
