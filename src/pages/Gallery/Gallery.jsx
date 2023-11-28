import { Helmet } from "react-helmet-async";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useState } from "react";

const Gallery = () => {

    
        const [checkedItems, setCheckedItems] = useState({});

        const handleCheckboxChange = (event) => {
            const { name, checked } = event.target;
            setCheckedItems({ ...checkedItems, [name]: checked });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            // Use the checkedItems state here or pass it to another function
            console.log('Checked Items:', checkedItems);
            // Perform any further actions like submitting to a server
        };

        return (
            <div>
                <Helmet>
                    <title>Fitness First | Gallery </title>
                    <link rel="canonical" href="/" />
                </Helmet>
                <PageTitle title='Gallery'></PageTitle>
                <h1>this is my Gallery page</h1>

                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="checkbox"
                            name="option1"
                            checked={checkedItems.option1 || false}
                            onChange={handleCheckboxChange}
                        />
                        Option 1
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="option2"
                            checked={checkedItems.option2 || false}
                            onChange={handleCheckboxChange}
                        />
                        Option 2
                    </label>
                    {/* Add more checkboxes similarly */}
                    <br />
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    };

    export default Gallery;