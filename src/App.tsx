import SideMenu from "@/features/side-menu/SideMenu";
import { Separator } from "components/ui/separator";
import Plotter from "@/features/plotter/Plotter";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <main className="m-auto flex h-dvh w-full max-w-[1536px] flex-col md:flex-row">
      <Toaster />
      <aside className="w-1/5 flex-auto p-5">
        <SideMenu />
      </aside>
      <Separator
        orientation="vertical"
        decorative
        className="hidden w-1 md:block"
      />
      <Separator
        orientation="horizontal"
        decorative
        className="block w-1 md:hidden"
      />
      <section className="w-4/5 flex-auto p-5">
        <Plotter />
      </section>
    </main>
  );
}

export default App;
