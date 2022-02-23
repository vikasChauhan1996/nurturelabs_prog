import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Avatar,
  Typography,
  createStyles,
  makeStyles,
  Tabs,
  Tab,
  Theme,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TabPanel,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
const wallet = "/assets/images/Wallet.svg";
const backg = "/assets/images/bg.svg";
const custmicn = "/assets/images/customicon.svg";
const copyicon = "/assets/images/copyicon.png";
const edicon = "/assets/images/endicon.svg";
const fee = [
  {
    id: 2009,
    charge: "12.5% of fee",
    referlink: "Your Referral Link for xyz",
    link: "https://unityexchange.design",
    icon: copyicon,
  },
  {
    id: 5527,
    charge: "12.5% of fee",
    referlink: "Your Referral Link for xyz",
    link: "https://unityexchange.design",
    icon: copyicon,
  },
];

const SectionComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [userData, setUserData] = useState([]);
  const [tutorial, setTutorial] = useState(true);
  console.log("tute", tutorial);
  const handleChange = (e, newvalue) => {
    setValue(newvalue);
  };

  const getData = async () => {
    const res = await axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/akshita151199/APIs/main/data",
    });
    console.log("tesponse", res.data);
    setUserData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const removediv = () => {
    setTutorial(false);
    console.log("clicked tute val ", tutorial);
  };

  return (
    <Box className={classes.main_container}>
      <Box className={classes.top_section}>
        <Tabs
          value={value}
          // allowScrollButtonsMobile
          className={classes.tabbar}
        >
          <Tab className={classes.tabs} value={1} label="Section"></Tab>
        </Tabs>
        <Box className={classes.right_div}>
          <img src={wallet} />
          <Typography
            style={{ fontSize: "12px", lineHeight: "35px", color: "#ffffff" }}
            variant="subtitle1"
          >
            0.2 $XYZ
          </Typography>
          <Button className={classes.tier_btn}>Tier 1</Button>
        </Box>
      </Box>
      {/* tutorial div */}
      <Box>
        {tutorial && (
          <Box className={classes.tutorial_div}>
            <Box>
              <Typography variant="h6" className={classes.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <Button className={classes.tutorial_btn}>tutorial</Button>
            </Box>

            <Box>
              <img className={classes.bg} src={backg} />
            </Box>
            <Close className={classes.closeicn} onClick={removediv} />
          </Box>
        )}
      </Box>

      <Box className={classes.rewardsection}>
        <Box className={classes.reward_detail}>
          <Typography
            style={{
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "24px",
              textTransform: "capitalize",
            }}
          >
            your rewards
          </Typography>
          <Typography
            style={{
              fontWeight: "600",
              fontSize: "28px",
              lineHeight: "48px",
              paddingTop: "13px",
            }}
          >
            $ 0.26231428
          </Typography>

          <Box className={classes.btn_box}>
            <Button className={classes.reward_btns}>$40 AVAX</Button>
            <Button className={classes.reward_btns}>$10 BNB</Button>
            <Button className={classes.reward_btns}>$210 BTC</Button>
          </Box>
        </Box>
        <Box>
          <Button
            className={classes.custom_btn}
            startIcon={<img src={custmicn} />}
          >
            custom link
          </Button>
        </Box>
      </Box>
      {/* // fee section */}
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        {fee.map((items) => {
          return (
            <Box className={classes.fee_box} key={items.id}>
              <Box className={classes.avatar_box}>
                <Avatar className={classes.avatar} />
                <Typography
                  style={{
                    fontSize: "20px",
                    lineheight: "24px",
                    color: "#fff",
                    marginLeft: "3%",
                  }}
                >
                  {items.charge}
                </Typography>
              </Box>
              <Typography
                style={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "#808191",
                  paddingTop: "7%",
                  paddingBottom: "2%",
                }}
              >
                {items.referlink}
              </Typography>
              <Box className={classes.last_box}>
                <Typography
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#fff",
                  }}
                >
                  {" "}
                  {items.link}
                </Typography>

                <img
                  src={items.icon}
                  style={{ width: "14px", height: "14px", marginLeft: "10%" }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className={classes.user_tabs}>
        <Tabs value={value} onChange={handleChange}>
          <Tab className={classes.tabs} label="first tab" />
          <Tab className={classes.tabs} label="second tab" />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={2} > */}
      <Box className={classes.table_head}>
        <Box className={classes.table_head_box}>
          <Typography className={classes.table_head_list}>asset</Typography>
        </Box>
        <Box className={classes.table_head_box}>
          <Typography className={classes.table_head_list}>amount</Typography>
        </Box>
        <Box className={classes.table_head_box}>
          <Typography className={classes.table_head_list}>
            user account
          </Typography>
        </Box>
        <Box className={classes.table_head_box}>
          <Typography className={classes.table_head_list}>
            Referral earning
          </Typography>
        </Box>
      </Box>

      {userData.map((items, index) => {
        return (
          <Box className={classes.table_body} key={index}>
            <Box className={classes.avatar_table_body}>
              <Avatar style={{ marginRight: "10px" }}>
                <img style={{ width: "inherit" }} src={items.img} />
              </Avatar>
              <Box>
                <Typography className={classes.body_content}>
                  {items.asset}
                </Typography>
                <Box className={classes.type_box}>
                  <Typography className={classes.span}>{items.type}</Typography>
                  <Box className={classes.user_name_img_box}>
                    <img src={items.chain.img} />

                    <Typography className={classes.user_name}>
                      {items.chain.name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className={classes.table_body_box}>
              <Typography className={classes.body_content}>
                {items.amount}
              </Typography>
              <Typography className={classes.span}>{items.state}</Typography>
            </Box>

            <Box className={classes.table_body_box}>
              <Typography className={classes.body_content}>
                {items.user.substring(0, 5) +
                  ".." +
                  items.user.substring(
                    items.user.length - 5,
                    items.user.length
                  )}
              </Typography>
            </Box>

            <Box className={classes.table_body_box}>
              <Typography className={classes.body_content}>
                {items.referral_earnings}
              </Typography>
              <Button
                className={classes.viewbtn}
                endIcon={<img src={edicon} />}
              >
                View on BSC Scan
              </Button>
            </Box>
          </Box>
        );
      })}

      {/* </TabPanel> */}
    </Box>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    main_container: {
      backgroundColor: "#000000",
      // height: "100vh",
      padding: "4%",
      borderRight: "1px solid #191B20",
    },
    tabbar: {
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "18px",
      color: "#FFFFFF",
      textTransform: "capitalize",
    },
    top_section: {
      display: "flex",
      justifyContent: "space-between",
    },
    right_div: {
      display: "flex",
      alignItems: "center",
      background: "#191B20",
      borderRadius: "12.2549px",
      marginRight: "5%",
      marginTop: "1%",
      //   Width: "200px",
      Height: "35px",
      width: "237px",
      justifyContent: "space-evenly",
    },
    tier_btn: {
      fontSize: "12px",
      lineHeight: "15px",
      color: "#3772FF",
      textTransform: "capitalize",
      background: "#A3E3FF",
      borderRadius: "5px",
      marginLeft: "24%",
      height: "23px",
    },
    tutorial_div: {
      background: "#ABE8FF",
      borderRadius: "10px",
      display: "flex",
      marginTop: "3%",
      alignItems: "center",
      justifyContent: "center",
    },
    bg: {
      position: "relative",
      top: "11px",
    },
    text: {
      color: "#2B2557",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "26px",
    },
    tutorial_btn: {
      background: "#FFFFFF",
      borderRadius: "6px",
      color: "#2B2557",
      textTransform: "capitalize",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "24px",
      width: "86px",
      height: "24px",
    },
    closeicn: {
      position: "relative",
      bottom: "46px",
      left: "8%",
      background: "#fff",
      borderRadius: "13px",
      fontSize: "20px",
      // cursor: "poniter",
      cursor: "pointer",
    },
    rewardsection: {
      background: "#191B20",
      borderRadius: "24px",
      marginTop: "3%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    reward_detail: {
      display: "flex",
      flexDirection: "column",
      color: "#FFFFFF",
      marginTop: "4%",
      paddingBottom: "4%",
      marginRight: "27%",
    },
    btn_box: {
      color: "#FFFFFF",
      marginTop: "12px",
    },
    reward_btns: {
      color: "#FFFFFF",
      background: "#353945",
      borderRadius: "11px",
      width: "79px",
      height: "25px",
      fontSize: "12px",
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
    fee_box: {
      display: "flex",
      background: "#191B20",
      borderRadius: "24px",
      marginTop: "3%",
      flexDirection: "column",
      padding: "3%",
      width: "48%",
    },
    avatar_box: {
      display: "flex",
      alignItems: "center",
    },
    avatar: {
      background: "linear-gradient(135deg, #BBB5E2 0%, #9C92DF 100%)",
      width: "23px",
      height: "23px",
    },
    last_box: {
      background: "#242731",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      padding: "13px",
      marginTop: "5%",
    },
    tabs: {
      color: "#fff",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "18px",
      textTransform: "capitalize",
    },
    table_head_list: {
      fontSize: "11px",
      lineHeight: "24px",
      fontWeight: "600",
      textTransform: "uppercase",
      color: "#808191",
    },
    table_head_box: {
      width: "25%",
      // marginLeft:"36px"
    },
    table_head: {
      display: "flex",
      background: "#191B20",
      borderRadius: "8px",
      padding: "2%",
      textAlign: "center",
    },
    table_body: {
      display: "flex",
      background: "#191B20",
      borderRadius: "8px",
      marginTop: "1%",
      padding: "3%",
    },
    body_content: {
      color: "#fff",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
    },
    avatar_table_body: {
      width: "25%",
      display: "flex",
      justifyContent: "center",
    },
    table_body_box: {
      width: "25%",
      textAlign: "center",
    },
    span: {
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "16px",
      color: "#808191",
      textTransform: "capitalize",
    },
    user_name: {
      fontWeight: "600",
      fontSize: "7.80515px",
      lineHeight: "11px",
      color: "#FFFFFF",
      textTransform: "capitalize",
    },
    type_box: {
      display: "flex",
      alignItems: "center",
    },
    user_name_img_box: {
      background: "#353945",
      borderRadius: "7.15472px",
      display: "flex",
      marginLeft: "7px",
      width: "43px",
      justifyContent: "space-evenly",
      paddingBottom: "2px",
      paddingTop: "2px",
    },
    viewbtn: {
      color: "#808191",
      textTransform: "capitalize",
      fontSize: "11px",
      lineHeight: "24px",
    },
  })
);

export default SectionComponent;
