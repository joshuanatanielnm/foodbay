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
import { projectStorage } from "../firebase/config";
import axios from "axios";
import { userProps } from "./Profile";
import { useHistory } from "react-router-dom";

type KotaProps = {
  provinsi: string;
  kota: string[];
};
export const Posting = () => {
  const modalLokasi = useRef<HTMLIonModalElement>(null);
  const modalKategori = useRef<HTMLIonModalElement>(null);
  const item = useRef<HTMLIonLabelElement>(null);
  const history = useHistory();
  const defaultValues = {
    postingTitle: "",
    postingDescription: "",
    postingCategory: "",
    postingLocation: "",
    postingImage: "",
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
  const [searchKota, setSearchKota] = useState("");
  const event = new Date();
  const [storageData, setStorageData] = useState<userProps>();
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const filteredKota = kota
    .filter((v: KotaProps) => v.provinsi.toLowerCase() === "jawa timur")
    .map((v: KotaProps) => v.kota)
    .flat(1)
    .filter((v) => v.toLowerCase().includes(searchKota.toLowerCase()))
    .map((v) => v);

  useEffect(() => {
    async function getStorageData() {
      const getdata = window.localStorage.getItem("user");
      getdata && setStorageData(JSON.parse(getdata));
    }
    getStorageData();
  }, []);

  const fetchDataKota = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/mtegarsantosa/json-nama-daerah-indonesia/master/regions.json"
    );
    return data.json();
  };

  const addFoodData = async (values: any) => {
    const storageRef = projectStorage
      .ref(`images/${values.postingImage.name}`)
      .put(values.postingImage);

    await storageRef.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        projectStorage
          .ref("images")
          .child(values.postingImage.name)
          .getDownloadURL()
          .then((url) => {
            axios
              .post("http://172.20.10.2:8080/posting", {
                userId: storageData?.user.id,
                postingTitle: values.postingTitle,
                postingDescription: values.postingDescription,
                postingCategory: values.postingCategory,
                postingLocation: values.postingLocation,
                postingImage: url,
              })
              .then((res) => {
                history.push("/home");
              })
              .catch(() => {
                setMessage("gagal tambah makanan");
                setIserror(true);
              });
          });
      }
    );
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
            onSubmit={addFoodData}
            enableReinitialize
          >
            {(formikProps) => {
              return (
                <Form id="login">
                  <IonList className="transparent">
                    <IonItem className="input-rounded" lines="none">
                      <IonInput
                        name="postingTitle"
                        placeholder="Judul"
                        value={formikProps.values.postingTitle}
                        spellCheck={false}
                        autocapitalize="off"
                        onIonChange={formikProps.handleChange}
                        required
                      />
                    </IonItem>
                    <IonItem className="input-rounded" lines="none">
                      <IonTextarea
                        name="postingDescription"
                        placeholder="Deskripsi"
                        value={formikProps.values.postingDescription}
                        spellCheck={false}
                        autocapitalize="off"
                        onIonChange={formikProps.handleChange}
                        required
                      />
                    </IonItem>
                    <IonItem className="input-rounded" lines="none">
                      <IonInput
                        name="postingCategory"
                        placeholder="kategori"
                        value={formikProps.values.postingCategory}
                        clearOnEdit={false}
                        id="open-modal-kategori"
                      />
                      <IonIcon icon={chevronDownOutline} />
                    </IonItem>
                    <IonItem className="input-rounded" lines="none">
                      <IonInput
                        name="postingLocation"
                        placeholder="Lokasi"
                        value={formikProps.values.postingLocation}
                        clearOnEdit={false}
                        id="open-modal-lokasi"
                      />
                      <IonIcon icon={chevronDownOutline} />
                    </IonItem>
                    <IonItem lines="none">
                      <input
                        id="file"
                        name="postingImage"
                        type="file"
                        required
                        onChange={(event) => {
                          formikProps.setFieldValue(
                            "postingImage",
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
                        formikProps.setFieldValue(
                          "postingCategory",
                          ev.detail.data
                        );
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
                        formikProps.setFieldValue(
                          "postingLocation",
                          ev.detail.data
                        );
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
                              onClick={() => confirmLokasi(kota)}
                              key={kota}
                            >
                              <IonLabel ref={item}>{kota}</IonLabel>
                            </IonItem>
                          ))}
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
                    Posting
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
