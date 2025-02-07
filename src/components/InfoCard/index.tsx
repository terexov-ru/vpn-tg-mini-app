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
    <div className="relative bg-white/5 backdrop-blur-lg px-4 py-5 rounded-xl flex items-center justify-between text-white shadow-md w-full">
      <div>
        <h2 className="text-base font-semibold tracking-wide">{title}</h2>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
      {buttonText && (
        <button className="bg-[#6F40DC] px-5 py-2 rounded-full text-white text-sm font-normal hover:bg-purple-700 transition">
          {buttonText}
        </button>
      )}
    </div>
  );
}
