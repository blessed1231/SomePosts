import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childrenRef, callback) {
    const observer = useRef()

    useEffect(() => {
        const  options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('inter')
                callback()
            }
        }, options)

        observer.current.observe(childrenRef.current)


        return function () {
            observer.current.unobserve(childrenRef.current)
        }
    }, [callback])
}