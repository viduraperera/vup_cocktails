import {gsap} from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Cocktails from "./components/Cocktails.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
        </main>
    );
};

export default App;