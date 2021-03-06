import { Typography, Container, makeStyles } from "@material-ui/core";
import { LOGIN_ROUTE } from "../constants";
import { REGISTER_ROUTE } from "../constants";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    btn: {
      fontSize: 20,
      backgroundColor: "#E2725A",
      "&:hover": {
        backgroundColor: "#94ACBF",
      },
    },
    title: {
      marginTop: 20,

      color: "#79AEB2",
      fontSize: 40,
    },
    subTitle: {
      color: "#79AEB2",
      fontSize: 30,
    },
    textField: {
      color: "#F9DDD2",
      backgroundColor: "#F9DDD2",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "30vh",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container>
          <Typography
            className={classes.title}
            variant='h6'
            color='secondary'
            component='h2'
            align='center'
            gutterBottom>
            Hello There- Welcome to Fitness Trackr!
          </Typography>
          <Typography
            className={classes.subTitle}
            variant='h1'
            color='secondary'
            component='h2'
            align='center'
            gutterBottom>
            Please
            <a href={LOGIN_ROUTE}> login</a> to your account or
            <a href={REGISTER_ROUTE}> register </a>
            to start tracking!
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Home;
