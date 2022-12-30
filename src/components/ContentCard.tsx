import { IonIcon, IonImg, IonRow, IonText } from "@ionic/react";
import { chatboxEllipsesOutline, shareSocialOutline } from "ionicons/icons";

interface ContentCardProps {
  userName: string;
  userCity: string;
  desc: string;
  img: string;
  numberOfComment: string;
  id?: number;
}

export const ContentCard = ({
  userName,
  userCity,
  desc,
  img,
  numberOfComment,
  id,
}: ContentCardProps) => {
  return (
    <a
      style={{ paddingBottom: "15px", color: "black", textDecoration: "none" }}
      href={`/detail-food/${id}`}
    >
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
    </a>
  );
};
