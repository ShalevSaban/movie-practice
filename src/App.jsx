import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { MovieGrid } from "./components/MovieGrid";

const App = () => {
  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area={"aside"}>Aside</GridItem>
      <GridItem area="main">
        <MovieGrid></MovieGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
