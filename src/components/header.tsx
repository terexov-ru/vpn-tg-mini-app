const Header = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h1
      className={`font-medium text-2xl/[28px] mb-5 text-center pt-5 ${
        className || ""
      }`.trim()}
    >
      {text}
    </h1>
  );
};

export default Header;
