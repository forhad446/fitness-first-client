import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Featured from "../Featured/Featured";
import Class from "../FeaturedClasses/Class";
import Newsletter from "../Newsletter/Newsletter";
import Team from "../Team/Team";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Fitness First | Home </title>
                <link rel="canonical" href="/" />
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <Class></Class>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Newsletter></Newsletter>
            <Team></Team>
        </div>
    );
};

export default Home;