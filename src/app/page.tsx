import FetauredWebinars from "@/components/FetauredWebinars";
import Moving_cards from "@/components/Moving_cards";
import OurInstructors from "@/components/OurInstructors";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSetion from "@/components/ui/HeroSetion";


export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
<HeroSetion/>
<FeaturedCourses/>
<Moving_cards />
<FetauredWebinars/>
<OurInstructors/>
</main>
  );
}
