import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );

export const settingsSlider = {
        dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />,
        responsive:[
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
      };