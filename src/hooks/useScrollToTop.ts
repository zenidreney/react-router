import { useEffect } from "react";
import { useLocation } from "react-router";

function useScrollToTop() {

const { pathname } = useLocation()

useEffect(() => {
    window.scrollTo({top: 0})
}, [pathname])
}

export { useScrollToTop }