import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import {
  homeOutline,
  searchOutline,
  heartHalfOutline,
  personOutline,
  addCircleOutline,
} from "ionicons/icons";

interface ContentProps {
  children: JSX.Element;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <>
      {children}
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Beranda</IonLabel>
        </IonTabButton>
        <IonTabButton tab="cari" href="/cari">
          <IonIcon icon={searchOutline} />
          <IonLabel>Cari</IonLabel>
        </IonTabButton>
        <IonTabButton tab="posting">
          <IonIcon icon={addCircleOutline} />
          <IonLabel>Posting</IonLabel>
        </IonTabButton>
        <IonTabButton tab="favorite">
          <IonIcon icon={heartHalfOutline} />
          <IonLabel>Favorite</IonLabel>
        </IonTabButton>
        <IonTabButton tab="akun" href="/profile">
          <IonIcon icon={personOutline} />
          <IonLabel>Akun</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </>
  );
};
