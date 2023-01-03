import { useRef } from "react";
import { arrowBack } from "ionicons/icons";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";

export const Bantuan = () => {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">Bantuan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center profile">
        <IonAccordionGroup ref={accordionGroup}>
          <IonAccordion value="first">
            <IonItem slot="header">
              <IonLabel
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "8px",
                }}
              >
                Apa itu aplikasi Foodbay?
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "left" }}
            >
              Foodbay adalah sebuah platform untuk saling memberikan informasi
              terhadap berlebihnya stok pangan di Indonesia. Disini kamu dapat
              memposting ataupun melakukan request terhadap makanan yang ada di
              komunitas.
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header">
              <IonLabel
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "8px",
                }}
              >
                Apakah aplikasi Foodbay berbeda dengan aplikasi pemesanan
                makanan lainnya?
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "left" }}
            >
              Foodbay berbeda dengan aplikasi pemesanan makanan pada umumnya
              karena disini kamu dapat memberikan ataupun mengajukan makanan
              yang telah disediakan oleh orang lain secara gratis di dalam
              forum.
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header">
              <IonLabel
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "8px",
                }}
              >
                Apa keuntungan mendapatkan makanan melalui aplikasi Foodbay?
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "left" }}
            >
              Dengan melakukan pemesanan makanan melalui aplikasi Foodbay, kamu
              turut membantu dalam meminimalisir bertambahnya tingkat foodwaste
              di Indonesia, bahkan di Dunia.
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem slot="header">
              <IonLabel
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "8px",
                }}
              >
                Dimana saya bisa mendapatkan aplikasi Foodbay?
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "left" }}
            >
              Untuk saat ini Foodbay dapat diunduh melalui link yang telah
              diberikan oleh pihak Foodbay, tetapi dalam waktu dekat kamu dapat
              menjumpai Foodbay di Appstore maupun Playstore.
            </div>
          </IonAccordion>
          <IonAccordion value="fifth">
            <IonItem slot="header">
              <IonLabel
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "8px",
                }}
              >
                Di area mana saja aplikasi Foodbay sudah dapat digunakan?
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "left" }}
            >
              Foodbay dapat diakses di seluruh bagian negara Indonesia. Dan kami
              tidak menutup kemungkinan untuk dapat berkembang di negara lain
              demi turut memberikan kebaikan.
            </div>
          </IonAccordion>
          <IonAccordion value="sixth">
            <IonItem slot="header">
              <IonLabel
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "8px",
                }}
              >
                Bagaimana saya bisa mendapatkan makanan dari aplikasi Foodbay?
              </IonLabel>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "left" }}
            >
              Kamu dapat mendapatkan makanan dari aplikasi Foodbay melalui
              postingan yang telah dibuat oleh komunitas kami. Dengan cara
              menghubungi pihak pemosting untuk mengajukan makanan yang ingin
              didapatkan.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};
