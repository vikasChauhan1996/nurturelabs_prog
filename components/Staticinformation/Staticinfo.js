import {
  Box,
  Button,
  Typography,
  createStyles,
  makeStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
} from "@material-ui/core";
import { ExpandMore, KeyboardBackspace, Input } from "@material-ui/icons";
const elipseicon = "/assets/images/Ellipse.svg";
const wallet = "/assets/images/Wallet.svg";
const custmicn = "/assets/images/customicon.svg";

const Staticinfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main_box}>
      <Box className={classes.top_btn_box}>
        <Box className={classes.left_box}>
          <Button
            className={classes.left_btn}
            endIcon={<ExpandMore className={classes.icon} />}
          >
            {" "}
            <img style={{marginRight:'4px'}} src={elipseicon} />
            <span className={classes.span}>Avalanche</span>
          </Button>
        </Box>
        <Box className={classes.right_box}>
          <Button
            className={classes.right_btn}
            endIcon={<ExpandMore className={classes.icon} />}
          >
            {" "}
            <img style={{marginRight:'10px'}} src={wallet} />
            <span className={classes.span}>0xf6...1353</span>
          </Button>
        </Box>
      </Box>

      {/* CUSTOM LINK */}
      <Box className={classes.custm_link_box}>
        <Box style={{ display: "flex" }}>
          <KeyboardBackspace className={classes.backspace_icon} />
          <Typography className={classes.cstm_head}>Custom link</Typography>
        </Box>
      </Box>

      <Typography className={classes.link}>
        https://testnet.xyz.xyz/trade?ref=
      </Typography>
      <TextField
        label="Enter"
        variant="outlined"
        className={classes.text_field}
      />

      <Box className={classes.bottom_bnt_box}>
        <Box className={classes.bottom_btn}>
          <Button
            className={classes.custom_btn}
            startIcon={<img src={custmicn} />}
          >
            custom link
          </Button>
        </Box>
        <Box className={classes.bottom_btn}>
          <Button
            className={classes.cancel_btn}
            startIcon={<Input />}
            variant="outlined"
          >
            cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    main_box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    top_btn_box: {
      display: "flex",
      marginTop: "10%",
      justifyContent: "space-evenly",
    },

    span: {
      color: "#fff",
      textTransform: "capitalize",
    },
    icon: {
      color: "#fff",
    },
    left_btn: {
      background: "#353945",
      borderRadius: "8px",
      color: "#fff",
      //   width: "40%",
    },
    right_btn: {
      border: "1px solid #3772FF",
      borderRadius: "10px",
    },
    custm_link_box: {
      display: "flex",
      marginTop: "17%",
      marginLeft: "10%",
      flexDirection: "column",
    },
    backspace_icon: {
      color: "#fff",
    },
    cstm_head: {
      color: "#fff",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "24px",
      marginLeft: "4%",
    },
    link: {
      color: "#fff",
      padding: "11%",
    },
    text_field: {
      background: "#353945",
      borderRadius: "12px",
      width: "82%",
      marginLeft: "10%",
    },
    custom_btn: {
      color: "#fff",
      background: "#3772FF",
      borderRadius: "10px",
      height: "27px",
      textTransform: "capitalize",
      padding: "17px",
      fontsize: "14px",
      lineheight: "24px",

      "&:hover": {
        color: "#fff",
        background: "#3772FF",
      },
    },
    cancel_btn: {
      color: "#fff",
      textTransform: "capitalize",
      border: "1px solid #808191",
      borderRadius: "8px",
      fontsize: "14px",
      lineheight: "24px",
    },
    bottom_bnt_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "9%",
    },
    bottom_btn: {
      width: "40%",
    },
  })
);

export default Staticinfo;
