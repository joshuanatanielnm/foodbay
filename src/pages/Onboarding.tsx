import { IonSlides, IonSlide, IonContent, IonButton } from "@ionic/react";
import { useRef } from "react";
import "../styles/Onboarding.scss";

const Onboarding = () => {
  const slideOpts = {
    speed: 400,
  };
  const mySlides = useRef(null);

  const onBtnClicked = async (direction: string) => {
    //@ts-ignore
    const swiper = await mySlides.current.getSwiper();
    if (direction === "next") {
      swiper.slideNext();
    } else if (direction === "prev") {
      swiper.slidePrev();
    }
  };

  return (
    <IonContent fullscreen>
      <IonSlides
        pager={true}
        options={slideOpts}
        className="ion onboarding-slides"
        ref={mySlides}
      >
        <IonSlide className="onboarding-slide">
          <div className="image-container">
            <img src="/assets/ilu1.png" alt="ilu1" />
          </div>
          <div className="slider-text">
            <h2>Temukan Kebutuhan Panganmu</h2>

            <p>
              Telusuri harta karun yang telah orang lain berikan kepada dunia
              untuk kebutuhan panganmu
            </p>
          </div>
          <IonButton onClick={() => onBtnClicked("next")}>Lewati</IonButton>
        </IonSlide>
        <IonSlide className="onboarding-slide">
          <div className="image-container">
            <img src="/assets/ilu2.png" alt="ilu1" />
          </div>
          <div className="slider-text">
            <h2>Jalin Sosialisasi untuk Pangan Lebih Baik</h2>

            <p>
              Temukan cara baru untuk saling terkoneksi satu sama lain dengan
              cara berbagi makanan
            </p>
          </div>
          <IonButton onClick={() => onBtnClicked("next")}>Lewati</IonButton>
        </IonSlide>
        <IonSlide className="onboarding-slide">
          <div className="image-container">
            <img src="/assets/ilu3.png" alt="ilu1" />
          </div>
          <div className="slider-text">
            <h2>Bagikan Makananmu Untuk Kebaikan</h2>

            <p>
              Bergabunglah bersama kami untuk dapat berbagi kebaikan kepada
              dunia melalui pangan
            </p>
          </div>
          <IonButton href="/signin">Mulai</IonButton>
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default Onboarding;
