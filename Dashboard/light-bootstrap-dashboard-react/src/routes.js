import Dashboard from "views/Dashboard.jsx";
import ColorAnalysis from "views/ColorAnalysis.jsx";
import GoogleTrends from "views/GoogleTrends.jsx";
import Trending from "views/Trending.jsx";
import Lagging from "views/Lagging.jsx";
import Notifications from "views/Notifications.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/coloranalysis",
    name: "Color Analysis",
    icon: "pe-7s-help2",
    component: ColorAnalysis,
    layout: "/admin"
  },
  {
    path: "/gtrends",
    name: "Google Trends",
    icon: "pe-7s-display1",
    component: GoogleTrends,
    layout: "/admin"
  },
  {
    path: "/trending",
    name: "Trending",
    icon: "pe-7s-rocket",
    component: Trending,
    layout: "/admin"
  },
  {
    path: "/lagging",
    name: "Lagging",
    icon: "pe-7s-angle-down-circle",
    component: Lagging,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
