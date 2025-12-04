import { useEffect } from "react";
import { useLocation } from "react-router";

function useScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname) window.scrollTo({ top: 0 });
	}, [pathname]);
}

export { useScrollToTop };
