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
import { Redirect } from "react-router-dom";
import { useKeyboardState } from "@ionic/react-hooks/keyboard";
import { TextFieldTypes } from "@ionic/core";

export function Signup() {
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { isOpen } = useKeyboardState();
  const [passwordType, setPasswordType] = useState<TextFieldTypes>("password");
  const defaultValues = {
    userProfileName: "",
    userEmail: "",
    userPhoneNumber: "",
    userPassword: "",
    userImage: "",
    userAddress: "",
  };
  const [state, setState] = useState(defaultValues);

  const handleSubmit = (value: {
    userProfileName: string;
    userEmail: string;
    userPhoneNumber: string;
    userPassword: string;
    userImage: string;
    userAddress: string;
  }) => {
    console.log(value);
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }).then((res) => {
      console.log("Request complete! response:", res);
      return <Redirect to="/signin" />;
    });
  };

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
          <IonCol className="text-gray-2">Daftar</IonCol>
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
              Kebaikanmu dimulai dari sini
            </IonText>
            <IonText
              style={{ textAlign: "left", paddingTop: "8px" }}
              className="text-gray-1"
            >
              Daftarkan email & kata sandi untuk mulai membagikan kebaikan
            </IonText>
          </IonRow>
        </IonRow>
        <Formik initialValues={state} onSubmit={handleSubmit}>
          {(formikProps) => {
            return (
              <Form id="login">
                <IonList className="transparent">
                  <IonItem className="input-rounded" lines="none">
                    <IonInput
                      name="userProfileName"
                      placeholder="Nama"
                      value={formikProps.values.userProfileName}
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
                      name="userPhoneNumber"
                      placeholder="Nomor Telepon"
                      value={formikProps.values.userPhoneNumber}
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
                      placeholder="Kata Sandi"
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
                      Daftar
                    </IonButton>
                  </IonCol>
                  <IonCol size="12">
                    <IonText>Sudah punya akun?</IonText>{" "}
                    <IonRouterLink href="/signin">SignIn</IonRouterLink>
                  </IonCol>
                </IonRow>
              </Form>
            );
          }}
        </Formik>
        {!isOpen && (
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
        )}
      </IonContent>
    </IonPage>
  );
}

export default Signup;
