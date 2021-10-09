import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import NavBar from "./components/Navbar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Add from "./components/Add";

function App() {
  const classes = makeStyles((theme) => ({
    rightBar: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  }));

  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.rightBar}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
