import { Container, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const RightBar = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      RIGHTBAR RIGHTBAR RIGHTBAR RIGHTBAR RIGHTBAR RIGHTBAR
    </Container>
  );
};

export default RightBar;
