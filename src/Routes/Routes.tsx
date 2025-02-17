import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Exchange from "../features/Exchange";
import Wallets from "../features/Wallets";
import DappMgt from "../features/Dapp";
import Layout from "../layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/exchange",
        element: <Exchange />,
      },
      {
        path: "/wallets",
        element: <Wallets />,
      },
      {
        path: "/dapp",
        element: <DappMgt />,
      },
    ],
  },
]);

export default router;
