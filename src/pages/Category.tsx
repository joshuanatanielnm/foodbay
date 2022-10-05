import { arrowBack } from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";

export const Category = ({ match }: any) => {
  const {
    params: { category },
  } = match;

  function capitalizeFirstLetter(string: string) {
    return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
  }

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">
            {capitalizeFirstLetter(category)}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};
