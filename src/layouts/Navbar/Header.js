import React from "react";
import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

// imagess
import mf_avatar from "../../../assets/mf_avatar.jpg";
import computer from "../../../assets/computer.JPG";

const useStyles = makeStyles({
  //   Header 
  heading: {
    padding: "70px",
    backgroundColor: "white",
    textAlign: "center",
    fontFamily: ' "eurostile", sans-serif',
  },
  h3: {
    fontSize: "3.2rem",
    margin: "20px 10px",
    '@media screen and (max-width: 290px)': {
      margin: "10px -22px",
    }
  },
  h: {
    fontSize: "1.7rem",
    lineHeight: "30px",
    fontFamily: ' "eurostile", sans-serif',
  },
  //  Images    
  imgs: {
    backgroundColor: "white",
  },
  img: {
    margin: "0 auto",
    textAlign: "center",
    width: "100%",
    maxWidth: "900px",
    height: "auto",
  },
  img1: {
    textAlign: "center",
    width: "370px",
    height: "auto",
    maxWidth: "100%",
    margin: "0 auto",
    marginTop: "-30px",
  },
  img2: {
    height: "auto",
    maxWidth: "100%",
    width: "100%",
  },
  //  Blue bar     
  blue_bar: {
    backgroundColor: "#6e07f3",
    height: "620px",
    marginTop: "-4px",
    '@media screen and (max-width: 400px)': {
      height: "730px",
    },
  },
  // blue_bar_content       
  blue_bar_content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "45%",
    transform: "translateY(-50%)",
    '& h1': {
      color: "white",
      fontSize: "200%",
      fontFamily: ' "eurostile", sans-serif',
    },
    '& p': {
      paddingTop: "17px",
      color: "white",
      textAlign: "center",
      width: "62%",
      fontSize: "22px",
      lineHeight: "1.3",
      fontFamily: ' "eurostile", sans-serif',
    },
    '@media screen and (max-width: 454px)': {
      '& h1': {
        textAlign: "center",
      },
      '& p': {
        fontSize: "115%",
      },
    },
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div><><><><div>
      <title>Home-Hashtag404</title>
    </div><>
        <div className={classes.heading}>
          <h3 className={classes.h3}>
            Designer, Frontend Developer & Mentor
          </h3>
          <h className={classes.h}>
            I design and code beautifully simple things, and I love what I do.
          </h>
        </div>

        {/* Images    */}
        <div className={classes.imgs}>
          <div className={classes.img}>
            <div className={classes.img1}><Image src={mf_avatar} /></div>
            <div className={classes.img2}><Image src={computer} /></div>
          </div>
        </div>
      </></>
      {/* Blue bar */}
      <div className={classes.blue_bar}>
        <div className={classes.blue_bar_content}>
          <h1>Hi, I’m Matt. Nice to meet you.</h1>
          <p>
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups,
            and collaborated with talented people to create digital products
            for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops
            one design problem at a time.
          </p>
        </div>
      </div>
    </></>
    </div>
  );
}

export default Header;
