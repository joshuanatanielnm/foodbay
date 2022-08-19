import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import "../styles/Invitation.scss";

export const Invitation = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">Ajak Teman</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow style={{ padding: "10px", marginTop: "20px" }}>
          <IonCol size="12">
            <IonRow>
              <IonText style={{ fontWeight: "bold" }}>
                Masuk untuk kembali menuai kebaikan
              </IonText>
              <IonText
                style={{ textAlign: "left", paddingTop: "8px" }}
                className="text-gray-1"
              >
                Masukkan email & kata sandi untuk mulai mencari dan berbagi
                makanan
              </IonText>
            </IonRow>
          </IonCol>
          <IonCol size="12" style={{ marginTop: "30px" }}>
            <IonButton expand="block" href="/main" mode="md" type="submit">
              Ajak teman
            </IonButton>
          </IonCol>
          <IonCol>
            <div className="image-container">
              <img src="/assets/ilu4.png" alt="ilu4" />
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};
