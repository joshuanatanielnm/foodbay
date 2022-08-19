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
            <div className="ion-padding" slot="content">
              First Content
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
            <div className="ion-padding" slot="content">
              Second Content
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
            <div className="ion-padding" slot="content">
              Third Content
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
            <div className="ion-padding" slot="content">
              Third Content
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
            <div className="ion-padding" slot="content">
              Third Content
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
            <div className="ion-padding" slot="content">
              Third Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};
