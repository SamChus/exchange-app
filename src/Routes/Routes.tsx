import { createBrowserRouter } from "react-router";
import App from "../App";
import Exchange from "../features/Exchange";
import Wallets from "../features/Wallets";
import DappMgt from "../features/Dapp";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/exchange",
        element: <Exchange />
    },
    {
        path: "/wallets",
        element: <Wallets />
    },
    {
        path: "/dapp",
        element: <DappMgt />
    }
])


export default router;