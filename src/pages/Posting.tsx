import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Form, Formik } from "formik";
import { arrowBack, chevronDownOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { Content } from "../layout/Content";

type KotaProps = {
  provinsi: string;
  kota: string[];
};
export const Posting = () => {
  const modalLokasi = useRef<HTMLIonModalElement>(null);
  const modalKategori = useRef<HTMLIonModalElement>(null);
  const item = useRef<HTMLIonLabelElement>(null);
  const defaultValues = {
    judul: "",
    deskripsi: "",
    kategori: "",
    lokasi: "",
    gambar: "",
  };
  const kategori = [
    "Buah",
    "Bumbu",
    "Camilan",
    "Cepat Saji",
    "Minuman",
    "Roti",
    "Sayur",
    "Lainnya",
  ];
  const [state, setState] = useState(defaultValues);
  const [isLoading, setIsLoading] = useState(true);
  const [kota, setKota] = useState([]);
  const [selectedKota, setSelectedKota] = useState();

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

  function confirmLokasi(kota: string) {
    modalLokasi.current?.dismiss(kota, "confirmLokasi");
  }

  function confirmKategori(kota: string) {
    modalKategori.current?.dismiss(kota, "confirmKategori");
  }

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle className="ion-no-padding">Buat Posting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Content>
        <IonContent fullscreen className="ion-padding">
          <Formik
            initialValues={state}
            onSubmit={() => console.log("submited")}
            enableReinitialize
          >
            {(formikProps) => {
              console.log(formikProps.values);
              return (
                <Form id="login">
                  <IonList className="transparent">
                    <IonItem className="input-rounded" lines="none">
                      <IonInput
                        name="judul"
                        placeholder="Judul"
                        value={formikProps.values.judul}
                        spellCheck={false}
                        autocapitalize="off"
                        onIonChange={formikProps.handleChange}
                        required
                      />
                    </IonItem>
                    <IonItem className="input-rounded" lines="none">
                      <IonTextarea
                        name="deskripsi"
                        placeholder="Deskripsi"
                        value={formikProps.values.deskripsi}
                        spellCheck={false}
                        autocapitalize="off"
                        onIonChange={formikProps.handleChange}
                        required
                      />
                    </IonItem>
                    <IonItem className="input-rounded" lines="none">
                      <IonInput
                        name="kategori"
                        placeholder="kategori"
                        value={formikProps.values.kategori}
                        clearOnEdit={false}
                        id="open-modal-kategori"
                      />
                      <IonIcon icon={chevronDownOutline} />
                    </IonItem>
                    <IonItem className="input-rounded" lines="none">
                      <IonInput
                        name="lokasi"
                        placeholder="Lokasi"
                        value={formikProps.values.lokasi}
                        clearOnEdit={false}
                        id="open-modal-lokasi"
                      />
                      <IonIcon icon={chevronDownOutline} />
                    </IonItem>
                    <IonItem lines="none">
                      <input
                        id="file"
                        name="gambar"
                        type="file"
                        required
                        onChange={(event) => {
                          formikProps.setFieldValue(
                            "gambar",
                            //@ts-ignore
                            event.currentTarget.files[0]
                          );
                        }}
                        className="form-control"
                      />
                    </IonItem>
                  </IonList>

                  {/* Modal Kategori */}
                  <IonModal
                    ref={modalKategori}
                    trigger="open-modal-kategori"
                    onWillDismiss={(ev) => {
                      if (ev.detail.role === "confirmKategori") {
                        formikProps.setFieldValue("kategori", ev.detail.data);
                      }
                    }}
                  >
                    <IonRow className="ion-justify-content-between ion-align-items-center">
                      <IonCol size="2">
                        <IonIcon
                          onClick={() => modalKategori.current?.dismiss()}
                          icon={arrowBack}
                        />
                      </IonCol>
                      <IonCol size="10">
                        <IonSearchbar placeholder="Pilih Kategori" />
                      </IonCol>
                    </IonRow>
                    <IonContent>
                      <IonList>
                        {kategori.map((v: string) => (
                          <IonItem onClick={() => confirmKategori(v)} key={v}>
                            <IonLabel ref={item}>{v}</IonLabel>
                          </IonItem>
                        ))}
                      </IonList>
                    </IonContent>
                  </IonModal>
                  {/* Modal Lokasi */}
                  <IonModal
                    ref={modalLokasi}
                    trigger="open-modal-lokasi"
                    onWillDismiss={(ev) => {
                      if (ev.detail.role === "confirmLokasi") {
                        formikProps.setFieldValue("lokasi", ev.detail.data);
                      }
                    }}
                  >
                    <IonRow className="ion-justify-content-between ion-align-items-center">
                      <IonCol size="2">
                        <IonIcon
                          onClick={() => modalLokasi.current?.dismiss()}
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
                              <IonItem
                                onClick={() => confirmLokasi(kota)}
                                key={kota}
                              >
                                <IonLabel ref={item}>{kota}</IonLabel>
                              </IonItem>
                            ));
                          })}
                      </IonList>
                    </IonContent>
                  </IonModal>
                  <IonButton
                    expand="block"
                    href="/main"
                    mode="md"
                    type="submit"
                    style={{ marginTop: "20px" }}
                  >
                    Daftar
                  </IonButton>
                </Form>
              );
            }}
          </Formik>
        </IonContent>
      </Content>
    </IonPage>
  );
};
