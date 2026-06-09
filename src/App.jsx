import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Message from "./components/Message";
import Work from "./components/Work";
import Services from "./components/Services";
import Industries from "./components/Industries";
import MeetMe from "./components/MeetMe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Message />
        <Work />
        <Services />
        <Industries />
        <MeetMe />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
