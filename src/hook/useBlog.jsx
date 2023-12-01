import { useEffect, useState } from "react";

const useBlog = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('https://fitness-first-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return [blog];
};

export default useBlog;