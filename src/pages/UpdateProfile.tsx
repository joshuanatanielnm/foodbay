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
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useState } from "react";

import { TextFieldTypes } from "@ionic/core";

export function UpdateProfile() {
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [passwordType, setPasswordType] = useState<TextFieldTypes>("password");
  const defaultValues = {
    userName: "",
    userEmail: "",
    userPhone: "",
    userPassword: "",
  };
  const [state, setState] = useState(defaultValues);

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
              <img
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                alt="profile"
              />
            </IonAvatar>
            <IonLabel>Tambah Foto</IonLabel>
          </IonCol>
        </IonRow>
        <Formik initialValues={state} onSubmit={() => console.log("submited")}>
          {(formikProps) => {
            return (
              <Form id="login">
                <IonList className="transparent">
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
                      name="userEmail"
                      type="email"
                      placeholder="Email"
                      value={formikProps.values.userEmail}
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
      </IonContent>
    </IonPage>
  );
}

export default UpdateProfile;
