import CEO from "@/components/sections/CEO";
import DeveloperExperience from "@/components/sections/DeveloperExperience";
import DevFriendlyControl from "@/components/sections/DevFriendlyControl";
import OurSolution from "@/components/sections/OurSolution";
import SearchResults from "@/components/sections/SearchResults";
import Testimonials from "@/components/sections/Testimonials";
import TheProblem from "@/components/sections/TheProblem";
import Workflow from "@/components/sections/Workflow";

export default function Home() {
  return (
    <div>
      <CEO />
      <TheProblem />
      <SearchResults />
      <OurSolution />
      <DevFriendlyControl />
      <Workflow />
      <DeveloperExperience />
      <Testimonials />
    </div>
  );
}
