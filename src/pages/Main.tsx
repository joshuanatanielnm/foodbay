import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import {
  homeOutline,
  searchOutline,
  personOutline,
  addCircleOutline,
} from "ionicons/icons";

export const Main = () => {
  return (
    <>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Beranda</IonLabel>
        </IonTabButton>
        <IonTabButton tab="cari">
          <IonIcon icon={searchOutline} />
          <IonLabel>Cari</IonLabel>
        </IonTabButton>
        <IonTabButton tab="posting">
          <IonIcon icon={addCircleOutline} />
          <IonLabel>Posting</IonLabel>
        </IonTabButton>
        <IonTabButton tab="akun">
          <IonIcon icon={personOutline} />
          <IonLabel>Akun</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </>
  );
};
