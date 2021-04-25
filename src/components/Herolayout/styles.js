import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignitems: "center",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
    alignItems: "center",
  },
  Logo: {
    display: "flex",
    height: "40vh",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin",
    },
  },
  logoContainer: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
}));

