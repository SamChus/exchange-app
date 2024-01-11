
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav nav" "info info info" "chart order trans"`}
      gridTemplateRows={"75px 50px 100vh"}
      gridTemplateColumns={"1fr 200px 200px"}
      fontSize={30}
      gap="8px"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="info" bg="gold">
        Info
      </GridItem>
      <GridItem area="chart" bg="brown" >
        Chart
      </GridItem>
      <GridItem area="order" bg="blue">
        Order
      </GridItem>
      <GridItem area="trans" bg="dodgerblue">
        Buy/Sale
      </GridItem>
    </Grid>
  );
}

export default App;
 {
  base: `"nav info chart order trans"`
  lg: `"nav nav nav" "info info info" "chart order trans"`;
 }
