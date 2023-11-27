import { Helmet } from "react-helmet-async";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Fitness First | Gallery </title>
                <link rel="canonical" href="/" />
            </Helmet>
            <PageTitle title='Gallery'></PageTitle>
            <h1>this is my Gallery page</h1>
        </div>
    );
};

export default Gallery;