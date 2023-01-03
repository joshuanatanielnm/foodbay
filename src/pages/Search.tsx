import {
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
  IonSearchbar,
} from "@ionic/react";
import { Content } from "../layout/Content";
import { arrowBack, filterCircleOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { OverlayEventDetail } from "@ionic/core/components";
import { ContentCard } from "../components/ContentCard";
import axios from "axios";

type KotaProps = {
  provinsi: string;
  kota: string[];
};

export const Search = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const item = useRef<HTMLIonLabelElement>(null);
  const [filter, setFilter] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [kota, setKota] = useState([]);
  const [searchKota, setSearchKota] = useState("");
  const [searchData, setSearchData] = useState("");
  const [selectedKota, setSelectedKota] = useState("");
  const [data, setData] = useState<any>([]);
  const filteredKota = kota
    .filter((v: KotaProps) => v.provinsi.toLowerCase() === "jawa timur")
    .map((v: KotaProps) => v.kota)
    .flat(1)
    .filter((v) => v.toLowerCase().includes(searchKota.toLowerCase()))
    .map((v) => v);

  const filteredData = data.filter(
    (v: any) =>
      v.postingLocation.includes(selectedKota) &&
      v.postingDescription.toLowerCase().includes(searchData.toLowerCase())
  );
  console.log(filteredData);

  const fetchDataKota = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/mtegarsantosa/json-nama-daerah-indonesia/master/regions.json"
    );

    return data.json();
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDataKota()
      .then((value) => setKota(value))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));

    async function fetchData() {
      axios.get("http://localhost:8080/posting").then((response) => {
        setData(response.data["posting"]);
      });
    }
    fetchData();
  }, []);

  function confirm(kota: string) {
    modal.current?.dismiss(kota, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      setFilter(ev.detail.data);
    }
  }
  return (
    <IonPage>
      <Content>
        <IonContent fullscreen className="ion-padding">
          <IonRow className="ion-justify-content-between ion-align-items-center">
            <IonCol size="9">
              <IonSearchbar
                placeholder="Mau makan apa hari ini?"
                onIonChange={(e) => setSearchData(e.target.value!)}
                value={searchData}
              />
            </IonCol>
            <IonCol size="3">
              {selectedKota ? (
                <IonButton
                  fill="solid"
                  id="open-modal"
                  style={{ fontSize: "10px" }}
                >
                  {selectedKota}
                </IonButton>
              ) : (
                <IonButton fill="clear" id="open-modal">
                  <IonIcon
                    icon={filterCircleOutline}
                    size="large"
                    color="gray"
                  />
                </IonButton>
              )}
            </IonCol>
          </IonRow>

          <div style={{ padding: 3 }}>
            {/* <div style={{ marginBottom: 20 }}>Kota: all</div> */}

            {filteredData.length > 0 ? (
              filteredData.map((v: any) => (
                <ContentCard
                  key={v.id}
                  id={v.id}
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

          <IonModal
            ref={modal}
            trigger="open-modal"
            onWillDismiss={(ev) => onWillDismiss(ev)}
          >
            <IonRow className="ion-justify-content-between ion-align-items-center">
              <IonCol size="2">
                <IonIcon
                  onClick={() => modal.current?.dismiss()}
                  icon={arrowBack}
                />
              </IonCol>
              <IonCol size="10">
                <IonSearchbar
                  placeholder="Pilih Kota"
                  onIonChange={(e) => setSearchKota(e.target.value!)}
                  value={searchKota}
                />
              </IonCol>
            </IonRow>
            <IonContent>
              <IonList>
                {!isLoading &&
                  filteredKota &&
                  filteredKota.map((kota) => (
                    <IonItem
                      onClick={() => {
                        confirm(kota);
                        setSelectedKota(kota);
                      }}
                      key={kota}
                    >
                      <IonLabel ref={item}>{kota}</IonLabel>
                    </IonItem>
                  ))}
              </IonList>
            </IonContent>
          </IonModal>
        </IonContent>
      </Content>
    </IonPage>
  );
};
