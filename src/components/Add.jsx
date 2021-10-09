import {
  Container,
  Fab,
  makeStyles,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
      paddingTop: 25,
    },
  },
}));

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete={false}>
            <div className={classes.item}>
              <TextField
                label="Title"
                size="small"
                id="title"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                label="Description"
                defaultValue="Tell my story..."
                size="small"
                id="desc"
                variant="outlined"
                rows={4}
                multiline
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem>Public</MenuItem>
                <MenuItem>Private</MenuItem>
                <MenuItem>Unpublish</MenuItem>
              </TextField>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default Add;
