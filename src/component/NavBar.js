import { useEffect, useRef } from "react";
import "./style/NavBar.css";

export default function NavBar() {
  const nav = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        nav.current.classList.add("showNav");
      } else {
        nav.current.classList.remove("showNav");
      }
    });
  }, []);

  return (
    <div className="nav" ref={nav}>
      <img className="left_img" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />

      <img className="right_img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avator" />
    </div>
  );
}
