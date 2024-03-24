import SideMenu from "@/features/side-menu/SideMenu";
import { Separator } from "components/ui/separator";
import Plotter from "@/features/plotter/Plotter";

function App() {
  return (
    <main className="flex h-dvh">
      <aside className="w-1/5 flex-auto p-5">
        <SideMenu />
      </aside>
      <Separator orientation="vertical" decorative className="w-1" />
      <section className="w-4/5 flex-auto p-5">
        <Plotter />
      </section>
    </main>
  );
}

export default App;
