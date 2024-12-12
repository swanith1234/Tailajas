import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const Certifications = ({ userData }) => {
  const certificationImages = userData?.certifications || [];

  return (
    <section className="c-space my-20">
      <p className="head-text text-center text-3xl font-bold">
        My Certifications
      </p>

      <div className="mt-12">
        {certificationImages.length > 0 ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3} // Show multiple slides for a better 3D effect
            coverflowEffect={{
              rotate: 50, // Rotation angle
              stretch: 0,
              depth: 200, // Controls the 3D perspective
              modifier: 1, // Modifies the intensity of the effect
              slideShadows: true, // Adds shadows for a 3D look
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 2500, // Auto-play delay
              disableOnInteraction: false,
            }}
            className="swiper_container"
          >
            {certificationImages.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="image-wrapper">
                  <img
                    src={imgSrc}
                    alt={`Certification ${index + 1}`}
                    className="certification-image"
                  />
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        ) : (
          <p className="text-center text-lg">No certifications available.</p>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .swiper_container {
          height: 52rem;
          padding: 2rem 0;
          position: relative;
        }

        .swiper-slide {
          width: 30rem;
          height: 30rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: perspective(1000px); /* Enhance the 3D perspective */
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          padding-top: 100%; /* Aspect ratio 1:1 (square) */
          border-radius: 1rem;
          overflow: hidden;
          background: #f0f0f0;
        }

        .certification-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover; /* Fill and crop excess content */
        }

        .slider-controler {
          position: relative;
          bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-controler .swiper-button-next {
          left: 58%;
          transform: translateX(-58%);
        }

        .slider-controler .swiper-button-prev {
          left: 42%;
          transform: translateX(-42%);
        }

        .slider-controler .slider-arrow {
          background: white;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
        }

        .slider-controler .slider-arrow ion-icon {
          font-size: 2rem;
          color: black;
        }

        .swiper-pagination .swiper-pagination-bullet {
          background: gray;
        }

        .swiper-pagination .swiper-pagination-bullet-active {
          background: #6a59ff;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
