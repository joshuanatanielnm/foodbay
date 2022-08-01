import { Form, Formik } from "formik";
import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
} from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { useState } from "react";

import { TextFieldTypes } from "@ionic/core";

export function Signin() {
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [passwordType, setPasswordType] = useState<TextFieldTypes>("password");
  const defaultValues = {
    userEmail: "",
    userPassword: "",
  };
  const [state, setState] = useState(defaultValues);

  const togglePasswordVisible = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-text-center">
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
          <IonCol className="text-gray-2">Masuk</IonCol>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#EDEDED",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          />
          <IonRow className="ion-padding">
            <IonText style={{ fontWeight: "bold" }}>
              Masuk untuk kembali menuai kebaikan
            </IonText>
            <IonText
              style={{ textAlign: "left", paddingTop: "8px" }}
              className="text-gray-1"
            >
              Masukkan email & kata sandi untuk mulai mencari dan berbagi
              makanan
            </IonText>
          </IonRow>
        </IonRow>
        <Formik initialValues={state} onSubmit={() => console.log("submited")}>
          {(formikProps) => {
            return (
              <Form id="login">
                <IonList className="transparent">
                  <IonItem className="input-rounded" lines="none">
                    <IonInput
                      name="userEmail"
                      type="email"
                      placeholder="Masukkan Email"
                      value={formikProps.values.userEmail}
                      spellCheck={false}
                      autocapitalize="off"
                      onIonChange={formikProps.handleChange}
                      required
                    />
                  </IonItem>
                  <IonItem className="input-rounded" lines="none">
                    <IonInput
                      name="userPassword"
                      type={passwordType}
                      placeholder="Masukkan Kata Sandi"
                      value={formikProps.values.userPassword}
                      clearOnEdit={false}
                      onIonChange={formikProps.handleChange}
                    ></IonInput>
                    {passwordType === "password" ? (
                      <IonIcon
                        icon={eyeOutline}
                        onClick={togglePasswordVisible}
                      />
                    ) : (
                      <IonIcon
                        icon={eyeOffOutline}
                        onClick={togglePasswordVisible}
                      />
                    )}
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
                      Masuk
                    </IonButton>
                  </IonCol>
                  <IonCol size="12">
                    <IonText>Belum punya akun?</IonText>{" "}
                    <IonRouterLink href="/signup">Buat akun</IonRouterLink>
                  </IonCol>
                </IonRow>
              </Form>
            );
          }}
        </Formik>
        <IonRow>
          <IonCol
            size="12"
            style={{
              position: "absolute",
              bottom: 0,
              paddingBottom: "20px",
            }}
          >
            <IonText>Dengan masuk atau mendaftar, Anda menyetujui </IonText>{" "}
            <IonRouterLink href="/signup">Ketentuan Layanan</IonRouterLink>
            <IonText> dan </IonText>
            <IonRouterLink href="/signup">Kebijakan Privasi</IonRouterLink>
            <IonText> kami.</IonText>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}

export default Signin;
