import Home from "./client/web/components/Home";
import Dashboard from "./client/dashboard/Dashboard";
import Login from "./client/web/components/Login";
import Signup from "./client/web/components/Signup";
import PriceCards from "./client/containers/PriceCards";
import Solutions from "./client/containers/Solutions";
import Contact from "./client/containers/Contact";
import LandingPage from "./client/containers/LandingPage";
import Yale from "./client/schools/yale/Yale";
import YaleLogin from "./client/schools/yale/containers/YaleLogin";
import YaleDashboard from "./client/schools/yale/containers/YaleDashboard";
import YaleRoom from "./client/schools/yale/containers/YaleRoom";
import Profile from "./client/dashboard/components/Profile";
import UserDashboard from "./client/dashboard/components/UserDashboard";

import Immersful from "./Immersful";

const webroutes = [
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/login",
    exact: true,
    component: Login
  },
  {
    path: "/signup",
    exact: true,
    component: Signup
  },
  {
    path: "/",
    exact: true,
    component: LandingPage
  },
  // {
  //   path: "/dashboard",
  //   exact: true,
  //   component: Dashboard,
  //   fetchInitialData: () => {
  //     console.log("dashboard");
  //   }
  // },
  {
    path: "/profile",
    exact: true,
    component: Profile
  },
  {
    path: "/contact",
    exact: true,
    component: Contact
  },
  {
    path: "/userdash",
    exact: true,
    component: UserDashboard
  },
  {
    path: "/price-cards",
    exact: true,
    component: PriceCards,
    fetchInitialData: () => {
      console.log("price-cards");
    }
  },
  {
    path: "/solutions",
    exact: true,
    component: Solutions
  },

  {
    path: "/yale",
    exact: true,
    component: Yale,
    fetchInitialData: () => {
      console.log("yale");
    }
  },
  {
    path: "/login-yale",
    exact: true,
    component: YaleLogin,
    fetchInitialData: () => {
      console.log("login-yale");
    }
  },
  {
    path: "/dashboard-yale",
    exact: true,
    component: YaleDashboard,
    fetchInitialData: () => {
      console.log("yale dashboard");
    }
  },
  {
    path: "/room-yale",
    exact: true,
    component: YaleRoom
  },
  {
    path: "/immersful",
    exact: true,
    component: Immersful
  }
];

export default webroutes;
