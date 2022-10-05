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
            <IonCol size="10">
              <IonSearchbar placeholder="Mau makan apa hari ini?" />
            </IonCol>
            <IonCol size="2">
              <IonButton fill="clear" id="open-modal">
                <IonIcon icon={filterCircleOutline} size="large" color="gray" />
              </IonButton>
            </IonCol>
          </IonRow>
          <div style={{ padding: 3 }}>
            <ContentCard
              userName="Joshua Suherman"
              userCity="Tangerang"
              desc="Beberapa stok sayuran yang akan dibuang jika tidak ada pembeli
                  di Supermarket Indo..."
              img="/assets/food/vegetable.png"
              numberOfComment="12"
            />
            <ContentCard
              userName="Joshua Suherman"
              userCity="Tangerang"
              desc="Beberapa stok sayuran yang akan dibuang jika tidak ada pembeli
                  di Supermarket Indo..."
              img="/assets/food/vegetable.png"
              numberOfComment="12"
            />
            <ContentCard
              userName="Joshua Suherman"
              userCity="Tangerang"
              desc="Beberapa stok sayuran yang akan dibuang jika tidak ada pembeli
                  di Supermarket Indo..."
              img="/assets/food/vegetable.png"
              numberOfComment="12"
            />
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
                <IonSearchbar placeholder="Pilih Kota" />
              </IonCol>
            </IonRow>
            <IonContent>
              <IonList>
                {!isLoading &&
                  kota &&
                  kota.map((v: KotaProps) => {
                    return v.kota.map((kota) => (
                      <IonItem onClick={() => confirm(kota)} key={kota}>
                        <IonLabel ref={item}>{kota}</IonLabel>
                      </IonItem>
                    ));
                  })}
              </IonList>
            </IonContent>
          </IonModal>
        </IonContent>
      </Content>
    </IonPage>
  );
};
