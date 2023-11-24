import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import banner1 from './../../../assets/img/banner 1.jpg'
import banner2 from './../../../assets/img/banner 2.jpg'
import banner3 from './../../../assets/img/banner 3.jpg'
import banner4 from './../../../assets/img/banner 4.jpg'

const Banner = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >


                <div data-src={banner1} >
                    <h1>Caption 1</h1>
                    <p>Description for Slide 1</p>
                </div>
                <div data-src={banner2} />
                <div data-src={banner3} />
                <div data-src={banner4} />
            </AutoplaySlider>
        </>
    );
};

export default Banner;