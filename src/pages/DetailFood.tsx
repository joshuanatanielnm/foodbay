import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonLoading,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { Form, Formik } from "formik";
import {
  arrowBack,
  caretForwardOutline,
  chatboxEllipsesOutline,
  chatbubbleOutline,
  shareSocialOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { userProps } from "./Profile";

export const DetailFood = ({ match }: any) => {
  const {
    params: { id },
  } = match;

  const [data, setData] = useState<any>();
  const [storageData, setStorageData] = useState<userProps>();
  const [isLoading, setIsLoading] = useState(false);

  const phoneNumber = data ? `${data.User.userPhoneNumber}` : "0";
  const manipluatePhoneNumber = phoneNumber.replace(phoneNumber[0], "62");

  const userPostingImage = data
    ? data.User.userImage === ""
      ? "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
      : data.User.userImage
    : "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";

  useEffect(() => {
    async function getStorageData() {
      const getdata = window.localStorage.getItem("user");
      getdata && setStorageData(JSON.parse(getdata));
    }
    getStorageData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`http://localhost:8080/posting/detailposting/${id}`)
        .then((response) => {
          setData(response.data["postingDetail"]);
        });
    }

    fetchData();
  }, [id, isLoading]);

  const handleSubmit = (values: { comment: string }) => {
    setIsLoading(true);
    axios
      .post("http://localhost:8080/comment", {
        userId: storageData?.user.id,
        postingId: data.id,
        commentTime: new Date(Date.now()).toISOString(),
        comment: values.comment,
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">Forum</IonTitle>
        </IonToolbar>
      </IonHeader>

      {data && (
        <IonContent fullscreen className="ion-padding">
          <div style={{ padding: 3 }}>
            <div style={{ paddingBottom: "15px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: -20,
                }}
              >
                <img
                  alt="food detail"
                  src={userPostingImage}
                  style={{
                    borderRadius: "100%",
                    width: "90px",
                    height: "90px",
                  }}
                />
                <IonText style={{ fontSize: "12px" }}>
                  <span style={{ fontWeight: "bolder" }}>
                    {data.User.userProfileName} .{" "}
                  </span>
                  {data.postingLocation}
                </IonText>
              </div>
              <IonRow style={{ marginTop: -12 }}>
                <IonText
                  style={{
                    fontSize: "16px",
                    paddingTop: "4px",
                    paddingBottom: "8px",
                  }}
                >
                  {data.postingDescription}
                </IonText>
              </IonRow>
              <IonImg src={data.postingImage} className="food-image" />

              <IonRow
                style={{
                  paddingTop: "14px",
                  justifyContent: "space-between",
                  color: "#616161",
                }}
                className="ion-align-items-center"
              >
                <IonRow className="ion-align-items-center">
                  <IonRow className="ion-align-items-center">
                    <IonIcon
                      icon={chatboxEllipsesOutline}
                      style={{ fontSize: "24px" }}
                    />
                    <IonText style={{ fontSize: "12px", paddingLeft: "8px" }}>
                      {data.Comment.length}
                    </IonText>
                  </IonRow>
                </IonRow>
                <IonIcon
                  icon={shareSocialOutline}
                  style={{ fontSize: "24px" }}
                />
              </IonRow>
            </div>
            <div
              style={{
                marginBottom: 70,
              }}
            >
              {data.Comment.length > 0 &&
                data.Comment.map((v: any, i: number) => {
                  const userCommentImage =
                    v.User.userImage === ""
                      ? "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                      : v.User.userImage;
                  return (
                    <>
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: -20,
                        }}
                      >
                        <img
                          alt="food detail"
                          src={userCommentImage}
                          style={{
                            borderRadius: "100%",
                            width: "90px",
                            height: "90px",
                          }}
                        />
                        <IonText style={{ fontSize: "12px" }}>
                          <span style={{ fontWeight: "bolder" }}>
                            {v.User.userProfileName}
                          </span>
                          <br />
                          <span>
                            {new Date(v.commentTime).toLocaleDateString()}
                          </span>
                        </IonText>
                      </div>
                      <div style={{ marginTop: "-10px" }}>
                        <IonText style={{ fontSize: "14px" }}>
                          {v.comment}
                        </IonText>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div
            style={{
              padding: 3,
              position: "fixed",
              bottom: 30,
              width: "90vw",
              maxWidth: "400px",
            }}
          >
            <Formik
              initialValues={{ comment: "" }}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {(formikProps) => {
                return (
                  <Form id="posting">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <IonInput
                        name="comment"
                        placeholder="Komentar"
                        value={formikProps.values.comment}
                        spellCheck={false}
                        autocapitalize="off"
                        onIonChange={formikProps.handleChange}
                        style={{
                          background: "#F5F5F5",
                          borderRadius: "56px",
                          height: "40px",
                        }}
                        class="custom"
                        required
                      />
                      {isLoading ? (
                        <IonLoading isOpen={isLoading} />
                      ) : (
                        <button
                          style={{ all: "unset" }}
                          type="submit"
                          disabled={isLoading ? true : false}
                          onSubmit={() => formikProps.resetForm()}
                        >
                          <IonIcon
                            icon={caretForwardOutline}
                            style={{
                              width: "25px",
                              height: "25px",
                              color: "#616161",
                            }}
                          />
                        </button>
                      )}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <a
            style={{
              padding: 3,
              position: "fixed",
              bottom: 80,
              right: 30,
              backgroundColor: " #21BC58",
              borderRadius: "100%",
            }}
            href={`https://wa.me/${manipluatePhoneNumber}`}
          >
            <IonIcon
              icon={chatbubbleOutline}
              style={{ fontSize: "24px", color: "white", padding: "6px" }}
            />
          </a>
        </IonContent>
      )}
    </IonPage>
  );
};
