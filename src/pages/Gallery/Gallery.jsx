import { Helmet } from "react-helmet-async";

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Fitness First | Gallery </title>
                <link rel="canonical" href="/" />
            </Helmet>
            <h1>this is my Gallery page</h1>
        </div>
    );
};

export default Gallery;