import { useEffect, useState } from "react";

const Footer = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      setAtBottom(scrollTop + windowHeight >= documentHeight - 10); // 10px buffer
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check immediately on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-4 right-4 transition-opacity duration-500 pointer-events-none ${
        atBottom ? "opacity-40" : "opacity-0"
      }`}
    >
      <p className="text-white text-sm select-none">
        © {new Date().getFullYear()} Lushinity Studio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
