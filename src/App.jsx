import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import GridBg from "./components/ui/GridBg";
import StorySection from "./components/StorySection";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
          <GridBg />
          <Navbar />
          <Hero />
          <StorySection />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
