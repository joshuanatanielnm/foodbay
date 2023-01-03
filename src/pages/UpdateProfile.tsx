import { Form, Formik } from "formik";
import {
  IonAlert,
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useEffect, useState } from "react";

import { projectStorage } from "../firebase/config";
import { TextFieldTypes } from "@ionic/core";
import { userProps } from "./Profile";
import axios from "axios";
import { useHistory } from "react-router";

export function UpdateProfile() {
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [passwordType, setPasswordType] = useState<TextFieldTypes>("password");
  const [storageData, setStorageData] = useState<userProps>();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValues = {
    userName: storageData?.user.userProfileName,
    userPhone: storageData?.user.userPhoneNumber,
    profileImage: storageData?.user.userImage,
  };
  const history = useHistory();
  const userId = storageData ? storageData.user.id : null;
  const userImage =
    storageData?.user.userImage === ""
      ? "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
      : storageData?.user.userImage;

  useEffect(() => {
    async function getStorageData() {
      const getdata = window.localStorage.getItem("user");
      getdata && setStorageData(JSON.parse(getdata));
    }
    getStorageData();
  }, []);

  const handleUpdate = async (values: any) => {
    console.log(values);
    if (values.profileImage) {
      const storageRef = projectStorage
        .ref(`images/${values.profileImage.name}`)
        .put(values.profileImage);

      await storageRef.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          projectStorage
            .ref("images")
            .child(values.profileImage.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              axios
                .put(`http://localhost:8080/user/?userId=${userId}`, {
                  id: userId,
                  userImage: url,
                  userProfileName: values.userName,
                  userPhoneNumber: values.userPhone,
                })
                .then((response) => {
                  window.localStorage.setItem(
                    "user",
                    JSON.stringify(response.data)
                  );
                  history.push("/profile");
                })
                .catch(() => {
                  setMessage("gagal tambah makanan");
                  setIserror(true);
                });
            });
        }
      );
    } else {
      axios
        .put(`http://localhost:8080/user/?userId=${userId}`, {
          id: userId,
          userProfileName: values.userName,
          userPhoneNumber: values.userPhone,
        })
        .then((response) => {
          window.localStorage.setItem("user", JSON.stringify(response.data));
          history.push("/profile");
        })
        .catch(() => {
          setMessage("gagal tambah makanan");
          setIserror(true);
        });
    }
  };
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">Ubah Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center profile">
        <IonRow className="ion-text-center login-page">
          <IonCol>
            <IonAlert
              isOpen={iserror}
              onDidDismiss={() => setIserror(false)}
              cssClass="my-custom-class"
              header={"Error!"}
              message={message}
              buttons={["Dismiss"]}
            />
          </IonCol>
        </IonRow>
        <IonRow style={{ paddingBottom: "16px" }}>
          <IonCol>
            <IonAvatar>
              <img src={userImage} alt="profile" />
            </IonAvatar>
          </IonCol>
        </IonRow>
        {storageData && (
          <Formik initialValues={defaultValues} onSubmit={handleUpdate}>
            {(formikProps) => {
              return (
                <Form id="login">
                  <IonList className="transparent">
                    <IonItem lines="none">
                      <input
                        id="file"
                        name="profileImage"
                        type="file"
                        onChange={(event) => {
                          formikProps.setFieldValue(
                            "profileImage",
                            //@ts-ignore
                            event.currentTarget.files[0]
                          );
                        }}
                        className="form-control"
                      />
                    </IonItem>
                    <IonItem className="input-rounded" lines="none">
                      <IonInput
                        name="userName"
                        placeholder="Nama"
                        value={formikProps.values.userName}
                        spellCheck={false}
                        autocapitalize="off"
                        onIonChange={formikProps.handleChange}
                        required
                      />
                    </IonItem>
                    <IonItem className="input-rounded" lines="none">
                      <IonInput
                        name="userPhone"
                        placeholder="Nomor Telepon"
                        value={formikProps.values.userPhone}
                        spellCheck={false}
                        autocapitalize="off"
                        onIonChange={formikProps.handleChange}
                        required
                      />
                    </IonItem>
                  </IonList>
                  <IonRow style={{ marginTop: "20px" }}>
                    <IonCol size="12">
                      <IonButton
                        expand="block"
                        href="/main"
                        mode="md"
                        type="submit"
                      >
                        Simpan
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </Form>
              );
            }}
          </Formik>
        )}
      </IonContent>
    </IonPage>
  );
}

export default UpdateProfile;
