import { AboutMe } from "@/components/sections/AboutMe";
import { Hero } from "@/components/sections/Hero";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutMe />
      <div className="fixed bottom-4 right-4">
        <ModeToggle />
      </div>
    </div>
  );
}
