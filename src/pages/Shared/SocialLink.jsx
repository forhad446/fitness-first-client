import { FaFacebookF, FaTwitter, FaSquareInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialLink = () => {
    return (
        <>
            <Link to='/'>
                <FaFacebookF class="text-xl transition-colors duration-200 hover:text-gray-800 w-8 h-8 dark:hover:text-white"></FaFacebookF>
            </Link>
            <Link to='/'>
                <FaGithub class="text-xl transition-colors duration-200 hover:text-gray-800 w-8 h-8 dark:hover:text-white"></FaGithub>
            </Link>
            <Link to='/'>
                <FaLinkedinIn class="text-xl transition-colors duration-200 hover:text-gray-800 w-8 h-8 dark:hover:text-white"></FaLinkedinIn>
            </Link>
            <Link to='/'>
                <FaSquareInstagram class="text-xl transition-colors duration-200 hover:text-gray-800 w-8 h-8 dark:hover:text-white"></FaSquareInstagram>
            </Link>
            <Link to='/'>
                <FaTwitter class="text-xl transition-colors duration-200 hover:text-gray-800 w-8 h-8 dark:hover:text-white"></FaTwitter>
            </Link>
        </>
    );
};

export default SocialLink;