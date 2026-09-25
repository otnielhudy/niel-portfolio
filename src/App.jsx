import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import AppRouter from "./routes/AppRouter.jsx";

const themeTokens = {
  token: {
    colorPrimary: "#0f1b2d",
    colorLink: "#0f1b2d",
    colorLinkHover: "#1c2b44",
    colorSuccess: "#157a54",
    colorWarning: "#b4780a",
    borderRadius: 2,
    fontFamily: "Inter, sans-serif",
    colorBorder: "#e2e5ea",
  },
  components: {
    Button: {
      borderRadius: 2,
      controlHeight: 44,
      fontWeight: 500,
    },
    Tag: {
      borderRadiusSM: 2,
    },
  },
};

export default function App() {
  return (
    <ConfigProvider theme={themeTokens}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ConfigProvider>
  );
}
