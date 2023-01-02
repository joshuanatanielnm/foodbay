import { arrowBack } from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonCol,
} from "@ionic/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Content } from "../layout/Content";
import { ContentCard } from "../components/ContentCard";

export function capitalizeFirstLetter(string: string) {
  return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
}

export const Category = ({ match }: any) => {
  const {
    params: { category },
  } = match;

  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const filteredData = data.filter(
    (v: any) => v.postingCategory.toLowerCase() === category
  );

  useEffect(() => {
    async function fetchData() {
      axios.get("http://172.20.10.2:8080/posting").then((response) => {
        setData(response.data["posting"]);
      });
    }

    fetchData();
  }, []);

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

      <Content>
        <IonContent fullscreen className="ion-padding">
          <div style={{ padding: 3 }}>
            {filteredData.length > 0 ? (
              filteredData.map((v: any) => (
                <ContentCard
                  key={v.id}
                  userName={v.User.userProfileName}
                  userCity={v.postingLocation}
                  desc={v.postingDescription}
                  img={v.postingImage}
                  numberOfComment={v.Comment.length}
                />
              ))
            ) : (
              <IonCol>
                <div className="image-container">
                  <img src="/assets/searchNotFound.png" alt="ilu1" />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h2>Pencarian Tidak Ditemukan</h2>

                  <p>
                    Coba cari kata lain atau ubah filter untuk menemukan apa
                    yang kamu cari
                  </p>
                </div>
              </IonCol>
            )}
          </div>
        </IonContent>
      </Content>
    </IonPage>
  );
};
