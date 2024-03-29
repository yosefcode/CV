import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./slider.css";
import TruckWeb from "./truck-web/truck-web";
import GameDouble from "./game-double/game-double";
import TruckApp from "./truck-app/truck-app";
import Apartments from "./apartments/apartments";
import Resume from "./resume/resume";
import About from "./about/about";

const Slider = (props) => {
  const { setModal, setTabproject, setTababout, setTabresume, show, setShow } =
    props;
  const [pause, setPause] = React.useState(false);
  const [loadrsume, setLoadrsume] = React.useState(false);
  const timer = React.useRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    duration: 4000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  const aboutactive = () => {
    setLoadrsume(false);
    setTabresume("");
    setTababout("active");
    setTabproject("");
  };
  const resumeactive = () => {
    setLoadrsume(true);
    setTabresume("active");
    setTababout("");
    setTabproject("");
  };
  const projectactive = () => {
    setTabresume("");
    setTababout("");
    setTabproject("active");
    setLoadrsume(false);
  };

  React.useEffect(() => {
    currentSlide === 5
      ? resumeactive()
      : currentSlide === 0
      ? aboutactive()
      : projectactive();
  }, [currentSlide]);

  React.useEffect(() => {
    slider && slider.moveToSlideRelative(show);
  }, [show, slider]);

  // React.useEffect(() => {
  //   timer.current = setInterval(() => {
  //     if (!pause && slider) {
  //       slider.next();
  //     }
  //   }, 15000);
  //   return () => {
  //     clearInterval(timer.current);
  //   };
  // }, [pause, slider]);

  return (
    <div className="project">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider" dir="ltr">
          <div className="keen-slider__slide number-slide">
            <About setShow={setShow} />
          </div>
          <div className="keen-slider__slide number-slide">
            <Apartments />
          </div>
          <div className="keen-slider__slide number-slide">
            <TruckApp setModal={setModal} />
          </div>
          <div className="keen-slider__slide number-slide">
            <TruckWeb />
          </div>
          <div className="keen-slider__slide number-slide">
            <GameDouble />
          </div>
          <div className="keen-slider__slide number-slide">
            {loadrsume && <Resume />}
          </div>
        </div>

        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => {
                e.stopPropagation() || slider.prev();
                setShow(currentSlide - 1);
              }}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => {
                e.stopPropagation() || slider.next();
                setShow(currentSlide + 1);
              }}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                  setShow(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
export default Slider;
