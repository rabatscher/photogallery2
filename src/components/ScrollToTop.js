import { useEffect, useState } from "react";
import { BiArrowFromBottom, BiArrowBack } from "react-icons/bi";

// import { classNames } from "/utils";

export const ScrollToTop = ({ handleSetAlbum }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 70) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="fixed top-2 left-2 z-40">
        <button
          type="button"
          onClick={() => {
            handleSetAlbum(0);
          }}
          className={`${isVisible ? "opacity-100" : "opacity-0"}
          bg-[#f6b284] hover:bg-white hover:text-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2"
        `}>
          <BiArrowBack className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="fixed bottom-2 right-2 z-40">
        <button
          type="button"
          onClick={scrollToTop}
          className={`${isVisible ? "opacity-100" : "opacity-0"}
        bg-[#f6b284] hover:bg-white hover:text-[#f6b284] hover:ring-[#f6b284] inline-flex items-center p-3 text-white transition-opacity focus:outline-none hover:ring-2 focus:ring-offset-2"
        `}>
          <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </>
  );
};
