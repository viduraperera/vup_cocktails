import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText(".title", {type: 'chars, words'})
        const paraGraphSplit = new SplitText(".subtitle", {type: 'lines'})

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,
            ease: 'expo.out'
        })

        gsap.from(paraGraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }).to('.right-leaf', {y: 250}, 0).to('.left-leaf', {y: -250}, 0)
    }, [])
    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>
                <img src="/images/hero-left-leaf.png" alt='left-leaf' className='left-leaf'/>
                <img src="/images/hero-right-leaf.png" alt='right-leaf' className='right-leaf'/>

                <div className='body'>
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp Classic</p>
                            <p className="subtitle">Sip the Spirit <br/> of Summer</p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                Where nightlife meets the perfect pour, VUP Cocktails brings you crafted cocktails and
                                elevated nights designed for those who sip the night in style
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;