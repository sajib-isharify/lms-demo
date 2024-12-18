import dashboardLogo from "../assets/dashboard.png";
import inventoryLogo from "../assets/inventory.png";
import marketplacesLogo from "../assets/marketplaces.png";
import ordersLogo from "../assets/orders.png";
import shippingLogo from "../assets/shipping.png";
import reportsLogo from "../assets/reports.png";
import settingLogo from "../assets/setting.png";
import activityLogLogo from "../assets/activityLog.png";
import whatsNewLogo from "../assets/whatsNew.png";
import helpSupportLogo from "../assets/help-support.png";
import signOutLogo from "../assets/signOut.png";

const menuItems = [
  // Top menu items
  { title: "Dashboard", path: "/", icon: <img src={dashboardLogo} alt="Logo" />, type: "top" },
  { title: "Inventory", path: "/inventory", icon: <img src={inventoryLogo} alt="Logo" />, type: "top" },
  { title: "Marketplaces", path: "/market-places", icon: <img src={marketplacesLogo} alt="Logo" />, type: "top" },
  { title: "Orders", path: "/orders", icon: <img src={ordersLogo} alt="Logo" />, type: "top" },
  { title: "Shipping", path: "/shipping", icon: <img src={shippingLogo} alt="Logo" />, type: "top" },
  { title: "Reports", path: "/reports", icon: <img src={reportsLogo} alt="Logo" />, type: "top" },
  // Top menu items
  { title: "Settings", path: "/settings", icon: <img src={settingLogo} alt="Logo" />, type: "bottom" },
  { title: "Activity Log", path: "/activity-log", icon: <img src={activityLogLogo} alt="Logo" />, type: "bottom" },
  { title: "What's New?", path: "/whats-new", icon: <img src={whatsNewLogo} alt="Logo" />, type: "bottom" },
  { title: "Help & Support", path: "/help-support", icon: <img src={helpSupportLogo} alt="Logo" />, type: "bottom" },
  { title: "Sign Out", path: "/sign-out", icon: <img src={signOutLogo} alt="Logo" />, type: "bottom" }
];

export default menuItems;
