import About from "../About/About";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Class from "../FeaturedClasses/Class";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <Class></Class>
        </div>
    );
};

export default Home;