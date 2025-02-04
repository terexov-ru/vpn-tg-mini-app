import Key from "./Key";
import DownloadLinks from "./DownloadLinks";

export default function BottomSection() {
  return (
    <div className="px-4 flex flex-col gap-4 items-center">
      <Key />
      <DownloadLinks />
    </div>
  );
}
