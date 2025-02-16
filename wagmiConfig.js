import { createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";

const infuraKey = "1dab3c1c642f47f6a58e58c93881e10b";

const { chains, publicClient } = configureChains(
  [mainnet],
  [infuraProvider({ apiKey: infuraKey }), publicProvider()]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
});
