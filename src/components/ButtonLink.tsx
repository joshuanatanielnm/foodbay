import { IonIcon, IonItem, IonLabel } from "@ionic/react";

interface ButtonLinkProps {
  icon: string;
  name: string;
  link: string;
}

export const ButtonLink = ({ icon, name, link }: ButtonLinkProps) => {
  return (
    <IonItem href={link} detail={true} lines="full">
      <IonIcon size="large" icon={icon} />
      <IonLabel
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "8px",
        }}
      >
        <h2>{name}</h2>
      </IonLabel>
    </IonItem>
  );
};
