import { useRef, useEffect } from "react";

function useResponsivebar() {
  const ref = useRef<HTMLDivElement>(null);

  const SidebarControl = () => {
    const origin_y = ref.current?.getBoundingClientRect().top;

    const pos_y = window.scrollY;
    const obj = ref.current?.style;

    if (!obj) return;
    if (!origin_y) return;

    if (pos_y > (window.innerHeight * 7) / 10) {
      ref.current.style.position = "fixed";
      ref.current.style.top = "80px";
    } else {
      ref.current.style.position = "absolute";
      ref.current.style.left = "3%";
      ref.current.style.top = "70vh";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", SidebarControl);

    return () => window.removeEventListener("scroll", SidebarControl);
  }, []);

  return ref;
}
export default useResponsivebar;
