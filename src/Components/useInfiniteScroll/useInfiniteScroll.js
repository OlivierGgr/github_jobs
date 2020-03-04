import { useState, useEffect } from 'react'

const useInfiniteScroll = (cb) => {
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!fetching) return false;
        cb(() => {
            console.log("inside callback")
        });
    }, [fetching])

    function handleScroll() {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return false;
        setFetching(true);
    }

    return [fetching, setFetching];
};


export default useInfiniteScroll;