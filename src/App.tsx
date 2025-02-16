import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import TopInfo from "./components/TopInfo";
import TradeView from "./TradeView";
import OrderBook from "./components/OrderBook";
import BuyLimit from "./components/BuyLimit";
import OpenOrders from "./components/OpenOrders";


function App() {
  return (
    <Grid
      templateAreas={{
      base: `"nav" 
           "info"
           "chart"
           "order"
           "trans"
           "history"`,
      md: `"nav nav nav" 
         "info info info"
         "chart order trans"
         "history history history"`
      }}
      gridTemplateRows={{
      base: "75px 75px 1fr 1fr 1fr 1fr",
      md: "75px 75px 561px 50vh"
      }}
      gridTemplateColumns={{
      base: "1fr",
      md: "60% 1fr 1fr"
      }}
      fontSize={30}
      gap={3}
      bg="#1C2127"
      px={2}
      color={"#fff"}
    >
      <GridItem area="nav">
      <NavBar />
      </GridItem>
      <GridItem area="info">
      <TopInfo />
      </GridItem>
      <GridItem area="chart">
      <TradeView />
      </GridItem>
      <GridItem area="order">
      <OrderBook />
      </GridItem>
      <GridItem area="trans">
      <BuyLimit />
      </GridItem>
      <GridItem area="history">
      <OpenOrders />
      </GridItem>
    </Grid>
  );
}

export default App;

