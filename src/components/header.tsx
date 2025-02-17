const Header = ({ text }: { text: string }) => {
  return (
    <h1 className="font-medium text-2xl/[28px] mb-5 text-center">{text}</h1>
  );
};

export default Header;
