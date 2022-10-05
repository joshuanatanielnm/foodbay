import { IonIcon, IonImg, IonRow, IonText } from "@ionic/react";
import {
  chatboxEllipsesOutline,
  heartOutline,
  shareSocialOutline,
} from "ionicons/icons";

interface ContentCardProps {
  userName: string;
  userCity: string;
  desc: string;
  img: string;
  numberOfComment: string;
}

export const ContentCard = ({
  userName,
  userCity,
  desc,
  img,
  numberOfComment,
}: ContentCardProps) => {
  return (
    <div style={{ paddingBottom: "15px" }}>
      <IonRow>
        <IonText style={{ fontSize: "12px" }}>
          <span style={{ fontWeight: "bolder" }}>{userName} . </span>
          {userCity}
        </IonText>
      </IonRow>
      <IonRow>
        <IonText
          style={{
            fontSize: "16px",
            paddingTop: "4px",
            paddingBottom: "8px",
          }}
        >
          {desc}
        </IonText>
      </IonRow>
      <IonImg src={img} className="food-image" />

      <IonRow
        style={{
          paddingTop: "14px",
          justifyContent: "space-between",
          color: "#616161",
        }}
        className="ion-align-items-center"
      >
        <IonRow className="ion-align-items-center">
          <IonRow className="ion-align-items-center">
            <IonIcon
              icon={chatboxEllipsesOutline}
              style={{ fontSize: "24px" }}
            />
            <IonText style={{ fontSize: "12px", paddingLeft: "8px" }}>
              {numberOfComment}
            </IonText>
          </IonRow>
        </IonRow>
        <IonIcon icon={shareSocialOutline} style={{ fontSize: "24px" }} />
      </IonRow>
    </div>
  );
};
