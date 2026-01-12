import {gsap} from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div className="flex-center h-screen" style={{display: "flex", flexDirection: "column"}}>
            <h1 className='text-3xl text-indigo-300'>Hello, GSAP!</h1>
            <h2 className='text-2xl text-indigo-200'>Test, GSAP!</h2>
        </div>
    );
};

export default App;