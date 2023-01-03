import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { Content } from "../layout/Content";
import { ContentCard } from "../components/ContentCard";
import "../styles/Home.scss";
import axios from "axios";

const Home: React.FC = () => {
  const slideOpts = {
    speed: 400,
    slidesPerView: "auto",
  };
  const mySlides = useRef(null);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      axios.get("http://localhost:8080/posting").then((response) => {
        setData(response.data["posting"]);
      });
    }

    fetchData();
  }, []);

  return (
    <IonPage>
      <Content>
        <IonContent fullscreen className="ion-padding">
          <IonRow
            className="ion-justify-content-between ion-align-items-center"
            style={{ paddingTop: "8px" }}
          >
            <IonCol size="9">
              <IonText
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingTop: 4,
                }}
              >
                Berbagi Apa Hari Ini?
              </IonText>
            </IonCol>
          </IonRow>

          <IonSlides
            pager={true}
            options={slideOpts}
            className="ion promo-slides"
            ref={mySlides}
          >
            <IonSlide className="promo-slide">
              <IonImg src="/assets/banner/banner1.png" alt="banner 1" />
            </IonSlide>
            <IonSlide className="promo-slide">
              <IonImg src="/assets/banner/banner2.png" alt="banner 2" />
            </IonSlide>
            <IonSlide className="promo-slide">
              <IonImg src="/assets/banner/banner3.png" alt="banner 3" />
            </IonSlide>
            <IonSlide className="promo-slide">
              <IonImg src="/assets/banner/banner4.png" alt="banner 4" />
            </IonSlide>
          </IonSlides>
          <IonGrid style={{ marginTop: "10px" }}>
            <IonRow>
              <IonCol className="status-col">
                <div className="type-button">
                  <a href="/home/buah">
                    <IonImg src="/assets/type/buah.png" />
                  </a>
                </div>
                <IonText>Buah</IonText>
              </IonCol>
              <IonCol className="status-col">
                <div className="type-button">
                  <a href="/home/roti">
                    <IonImg src="/assets/type/roti.png" />
                  </a>
                </div>
                <IonText>Roti</IonText>
              </IonCol>
              <IonCol className="status-col">
                <div className="type-button">
                  <a href="/home/bumbu">
                    <IonImg src="/assets/type/bumbu.png" />
                  </a>
                </div>
                <IonText>Bumbu</IonText>
              </IonCol>
              <IonCol className="status-col">
                <div className="type-button">
                  <a href="/home/cepat saji">
                    <IonImg src="/assets/type/cepat-saji.png" />
                  </a>
                </div>
                <IonText>Cepat Saji</IonText>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="status-col">
                <div className="type-button">
                  <a href="/home/minuman">
                    <IonImg src="/assets/type/minuman.png" />
                  </a>
                </div>
                <IonText>Minuman</IonText>
              </IonCol>
              <IonCol className="status-col">
                <div className="type-button">
                  <a href="/home/cemilan">
                    <IonImg src="/assets/type/camilan.png" />
                  </a>
                </div>
                <IonText>Cemilan</IonText>
              </IonCol>
              <IonCol className="status-col">
                <div className="type-button">
                  <a href="/home/sayur">
                    <IonImg src="/assets/type/sayur.png" />
                  </a>
                </div>
                <IonText>Sayur</IonText>
              </IonCol>
              <IonCol className="status-col">
                <div className="type-button">
                  <a href="/home/lainnya">
                    <IonImg src="/assets/type/lainnya.png" />
                  </a>
                </div>
                <IonText>Lainnya</IonText>
              </IonCol>
            </IonRow>
          </IonGrid>

          <div
            style={{
              width: "full",
              height: "4px",
              background: "#C3CBCB",
              opacity: "16%",
              margin: "14px 0 14px",
            }}
          />

          <IonRow
            className="ion-justify-content-between ion-align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <IonCol size="6">
              <IonRow style={{ paddingBottom: "4px" }}>
                <IonText
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Lagi Trending
                </IonText>
                <IonText
                  style={{ color: "black", fontSize: 12, paddingTop: 4 }}
                >
                  Yang lagi rame diomongin.
                </IonText>
              </IonRow>
            </IonCol>
            <IonCol size="4">
              <IonButton size="small" href="/home/lagi trending">
                Lihat Semua
              </IonButton>
            </IonCol>
          </IonRow>

          <div style={{ padding: 3 }}>
            {data &&
              data.map((v: any) => (
                <ContentCard
                  key={v.id}
                  userName={v.User.userProfileName}
                  userCity={v.postingLocation}
                  desc={v.postingDescription}
                  img={v.postingImage}
                  numberOfComment={v.Comment.length}
                  id={v.id}
                />
              ))}
          </div>

          <div
            style={{
              width: "full",
              height: "4px",
              background: "#C3CBCB",
              opacity: "16%",
              margin: "14px 0 14px",
            }}
          />

          <IonRow>
            <IonCol size="7">
              <IonRow style={{ paddingBottom: "4px" }}>
                <IonText
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Berbagi Yuk
                </IonText>
                <IonText
                  style={{ color: "black", fontSize: 12, paddingTop: 4 }}
                >
                  Mari bantu sesama lewat pangan.
                </IonText>
              </IonRow>
            </IonCol>
          </IonRow>
          <div style={{ padding: 3 }}>
            <IonSlides
              pager={true}
              options={slideOpts}
              className="ion berbagi-slides"
              ref={mySlides}
            >
              <IonSlide className="berbagi-slide">
                <a href="https://kitabisa.com/campaign/yayasantunassehat?back_to=/search">
                  <IonImg src="/assets/berbagi/berbagi1.png" alt="banner 1" />
                </a>
                <IonText
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: 6,
                  }}
                >
                  Bantu Anak-Anak Kanker Bertahan Hidup
                </IonText>
                <IonText
                  style={{ color: "#616161", fontSize: 12, paddingTop: 4 }}
                >
                  Yayasan Tunas Sehat Indonesia
                </IonText>
              </IonSlide>
              <IonSlide className="berbagi-slide">
                <a href="https://kitabisa.com/campaign/pprawatinapibu">
                  <IonImg src="/assets/berbagi/berbagi2.png" alt="banner 2" />
                </a>
                <IonText
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: 6,
                  }}
                >
                  Biaya PP dan Makan Ibu Selama Mengajar
                </IonText>
                <IonText
                  style={{ color: "#616161", fontSize: 12, paddingTop: 4 }}
                >
                  Fajar Zaenal
                </IonText>
              </IonSlide>
              <IonSlide className="berbagi-slide">
                <a href="https://kitabisa.com/campaign/pprawatinapibu">
                  <IonImg src="/assets/berbagi/berbagi3.png" alt="banner 3" />
                </a>
                <IonText
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: 6,
                  }}
                >
                  Sedekah Beras untuk Santri Penghafal Al-QURAN
                </IonText>
                <IonText
                  style={{ color: "#616161", fontSize: 12, paddingTop: 4 }}
                >
                  Rumah Tahfidz Yatim
                </IonText>
              </IonSlide>
            </IonSlides>
          </div>

          {/* <IonRow
            className="ion-justify-content-between ion-align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <IonCol size="6">
              <IonRow style={{ paddingBottom: "4px" }}>
                <IonText
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Paling Disukai
                </IonText>
                <IonText
                  style={{ color: "black", fontSize: 12, paddingTop: 4 }}
                >
                  Yang banyak disukai netizen.
                </IonText>
              </IonRow>
            </IonCol>
            <IonCol size="4">
              <IonButton size="small">Lihat Semua</IonButton>
            </IonCol>
          </IonRow>

          <div style={{ padding: 3 }}>
            <ContentCard
              userName="Joshua Suherman"
              userCity="Tangerang"
              desc="Beberapa stok sayuran yang akan dibuang jika tidak ada pembeli
                  di Supermarket Indo..."
              img="/assets/food/vegetable.png"
              numberOfComment="12"
            />
            <ContentCard
              userName="Joshua Suherman"
              userCity="Tangerang"
              desc="Beberapa stok sayuran yang akan dibuang jika tidak ada pembeli
                  di Supermarket Indo..."
              img="/assets/food/vegetable.png"
              numberOfComment="12"
            />
          </div> */}
        </IonContent>
      </Content>
    </IonPage>
  );
};

export default Home;
