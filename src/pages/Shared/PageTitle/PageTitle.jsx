import './style.css'

const PageTitle = ({title}) => {
    return (
        <div>
            <div class="background-radial-gradient my-5">
                <div class=" p-8 shadow-lg rounded-lg">
                    <h1 class="text-4xl font-bold text-center text-white mb-4">{title}</h1>
                    {/* <!-- Your gallery content goes here -->
                    <!-- Images, thumbnails, etc. --> */}
                </div>
            </div>
        </div>
    );
};

export default PageTitle;