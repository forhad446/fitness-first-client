import About from "../About/About";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Class from "../FeaturedClasses/Class";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <Class></Class>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;