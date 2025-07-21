import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Cocktails />
    </main>
  )
}

export default App