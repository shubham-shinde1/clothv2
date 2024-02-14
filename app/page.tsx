import FlowByteButton from "./ui/button";
import FlowByteCarousel from "./ui/carousel";
import FlowByteFooter from "./ui/footer";
import FlowBiteNavBar from "./ui/navBar";
import FlowByteTimeline from "./ui/timeLIne";
import FlowByteModal from "./ui/modal";
import FlowByteDropdown from "./ui/dropdown";
import FlowByteNewsletter from "./ui/newsletter";

export default function MyPage() {
  return (
    <>
      <FlowBiteNavBar />
      <FlowByteCarousel />
      <div className="flex w-full justify-center gap-3 p-3">
        {/* <FlowByteDropdown /> */}
        <FlowByteModal />
      </div>
      <div className="w-2/4 ml-auto mr-auto">
        <FlowByteTimeline />
      </div>
      <FlowByteNewsletter />
      <FlowByteFooter />
    </>
  );
}
