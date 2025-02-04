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
    <div className="relative bg-white/5 backdrop-blur-lg p-5 rounded-2xl flex items-start justify-between text-white shadow-md w-full">
      <div>
        <h2 className="text-base font-semibold tracking-wide">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      {buttonText && (
        <button className="bg-purple-600 px-5 py-2 rounded-lg text-white font-semibold hover:bg-purple-700 transition">
          {buttonText}
        </button>
      )}
    </div>
  );
}
