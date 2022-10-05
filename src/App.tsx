import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Onboarding from "./pages/Onboarding";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { Profile } from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import { Bantuan } from "./pages/Bantuan";
import { Invitation } from "./pages/Invitation";
import { Policy } from "./pages/Policy";
import { Terms } from "./pages/Terms";
import Home from "./pages/Home";
import { Category } from "./pages/Category";
import { Search } from "./pages/Search";
import { Posting } from "./pages/Posting";

setupIonicReact();

const App: React.FC = () => {
  const { isLoggedIn } = {
    isLoggedIn: false,
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={Onboarding} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/profile" component={Profile} />
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/help" component={Bantuan} />
          <Route path="/invite-friend" component={Invitation} />
          <Route path="/policy" component={Policy} />
          <Route path="/terms" component={Terms} />
          <Route path="/home" component={Home} />
          <Route path="/cari" component={Search} />
          <Route path="/posting" component={Posting} />
          <Route path="/home/:category" component={Category} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
