import { useEffect, useState } from "react";

const useBlog = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return [blog];
};

export default useBlog;