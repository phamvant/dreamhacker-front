import HighlightArea from "@/components/HighlightArea";
import Topbar from "@/components/Topbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="max-w-3xl xl:max-w-7xl px-4 m-auto min-h-screen">
        <Topbar />
        <div className="grid grid-cols-3 gap-10 pt-24 md:pt-10">
          <div className="relative col-span-3 xl:col-span-2 rounded-lg">
            {children}
          </div>
          <div className="relative hidden xl:block md:col-span-1">
            <HighlightArea />
          </div>
        </div>
      </div>
      <div className="w-screen mt-20"> </div>
    </div>
  );
}
