import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
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
            <Blog></Blog>
        </div>
    );
};

export default Home;