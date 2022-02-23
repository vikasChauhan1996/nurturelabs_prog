import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  Avatar,
  Typography,
  createStyles,
  makeStyles,
  Switch,
} from "@material-ui/core";
import Data from "./SidePanneldata";
const closingicon = "/assets/images/closingicon.svg";
const avatar = "/assets/images/avataricon.svg";
const servericon = "/assets/images/server.svg";
const modeicon = "/assets/images/darkmode.svg";

const SidePannel = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.permDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box className={classes.heading_box}>
        <Avatar className={classes.avatar}>N</Avatar>
        <Typography variant="h3" className={classes.heading}>
          Name
        </Typography>
        <img src={closingicon} className={classes.closeimg} />
      </Box>
      <List className={classes.btn}>
        {Data.map((items) => {
          return (
            <ListItem key={items.id} >
              <Button
                className={classes.side_btn}
                startIcon={
                  <img
                    width="25px"
                    style={{ marginRight: "16px" }}
                    src={items.img}
                  />
                }
              >
                {items.btnname}
              </Button>
            </ListItem>
          );
        })}
      </List>
      <Box className={classes.sndlst_Btn}>
        <Button className={classes.profilebtn} startIcon={<img src={avatar} />}>
          $0.90
        </Button>
        <Button className={classes.buy_bitcoin_btn}>
          {" "}
          <span className={classes.span}> Buy </span> $XYZ
        </Button>
      </Box>
      <Box className={classes.last_Btn_box}>
        <Button className={classes.serverbtn}>
          {" "}
          <img src={servericon} />{" "}
        </Button>
        {/* <Button className={classes.mode_bnt} > <img src={modeicon} /> </Button> */}
        <Switch name="loading" color="primary" />
      </Box>
    </Drawer>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    permDrawer: {
      width: "280px",
      backgroundColor: "#000000",
      color: "#A8B0BC",
      height: "100vh",
      backgroundPosition: "fixed",
      borderRight: "1px solid #191B20",
    },
    drawerPaper: {
      // display: "flex",
      width: "278spx",
      backgroundColor: "#000000",
      padding: "20px 10px",
    },
    iconimg: {
      Height: "22px",
    },
    side_btn: {
      color: "#808191",
      textTransform: "capitalize",
    },
    avatar: {
      background: "#3772FF",
    },
    heading: {
      color: "#fff",
      fontWeight: "600",
      fontSize: "23.5618px",
      lineHeight: "31px",
      marginRight: "28%",
      paddingTop: "12px",
      marginLeft: "8%",
    },
    heading_box: {
      display: "flex",
      alignItems: "center",
    },
    closeimg: {
      width: "40px",
    },
    btn: {
      marginTop: "3%",
    },
    profilebtn: {
      color: "#fff",
      background: "#353945",
      borderRadius: "10px",
      Height: "28px",
    },
    buy_bitcoin_btn: {
      color: "#3772FF",
      background: "#A3E3FF",
      borderRadius: "10px",
      Height: "28px",
      marginLeft: "12px",
    },
    span: {
      textTransform: "capitalize",
    },
    sndlst_Btn: {
      marginLeft: "6%",
      marginTop: "7%",
    },
    last_Btn_box: {
      marginTop: "6%",
    },
  })
);

export default SidePannel;
