import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import "../styles/Profile.scss";
import {
  informationCircleOutline,
  peopleOutline,
  documentTextOutline,
  lockClosedOutline,
  logOutOutline,
  closeOutline,
} from "ionicons/icons";
import { ButtonLink } from "../components/ButtonLink";

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const akunNav = [
    {
      name: "Bantuan",
      icon: informationCircleOutline,
      href: "/help",
    },
    {
      name: "Ajak teman pakai Foodbay",
      icon: peopleOutline,
      href: "/invite-friend",
    },
  ];

  const otherInformation = [
    {
      name: "Ketentuan layanan",
      icon: documentTextOutline,
      href: "/terms",
    },
    {
      name: "Kebijakan privasi",
      icon: lockClosedOutline,
      href: "/policy",
    },
  ];
  return (
    <IonPage>
      <IonContent fullscreen className="ion-text-center profile">
        <div id="profil-content">
          <IonRow className="ion-text-center">
            <IonCol>
              <IonAvatar>
                <img
                  src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  alt="profile"
                />
              </IonAvatar>
              <IonLabel>
                <b>Chapo Chandra</b>
              </IonLabel>
              <br />
              <IonLabel>087851909833</IonLabel>
              <br /> <br />
              <a href="update-profile">Update profile</a>
            </IonCol>
          </IonRow>
          <IonCol>
            <IonRow style={{ paddingLeft: "10px" }}>
              <IonLabel>Akun</IonLabel>
            </IonRow>
            <IonList>
              {akunNav.map((item, index) => (
                <ButtonLink
                  icon={item.icon}
                  link={item.href}
                  name={item.name}
                  key={index}
                />
              ))}
            </IonList>
          </IonCol>
          <IonCol>
            <IonRow style={{ paddingLeft: "10px" }}>
              <IonLabel>Informasi lainnya</IonLabel>
            </IonRow>
            <IonList>
              {otherInformation.map((item, index) => (
                <ButtonLink
                  icon={item.icon}
                  link={item.href}
                  name={item.name}
                  key={index}
                />
              ))}
              <IonItem
                detail={true}
                lines="full"
                onClick={() => setShowModal(true)}
              >
                <IonIcon size="large" icon={logOutOutline} />
                <IonLabel
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    paddingLeft: "8px",
                  }}
                >
                  <h2>Keluar</h2>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCol>
        </div>
        <IonModal isOpen={showModal}>
          <IonRow style={{ padding: "10px" }}>
            <IonIcon
              size="large"
              style={{
                marginLeft: "85vw",
              }}
              icon={closeOutline}
              onClick={() => setShowModal(false)}
            />
            <h3>Keluar Akun?</h3>
            <IonText
              style={{ textAlign: "left", marginBottom: "20px" }}
              className="text-gray-1"
            >
              Daftarkan email & kata sandi untuk mulai membagikan kebaikan
            </IonText>
            <IonCol>
              <IonButton
                expand="block"
                href="/main"
                mode="md"
                type="submit"
                color="danger"
              >
                Keluar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
