import React, { useEffect, useRef, useState } from "react";
import style from "./Home.module.css";
// import Footer from '../footer/Footer';
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Input from "@mui/material/Input";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Button from "@mui/material/Button";
import Profiles from "../../component/profiles/Profiles";
import Posts from "../../component/profiles/Posts";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import SectionOne from "./leftSection/SectionOne";
import MenuSection from "./MenuSection";
import UserFollowData from "../../component/UserFollowData";
import RightSection from "./rightSection/RightSection";
import data from '../../data/userFake_DATA .json'

export default function Home() {
  const [isTweet, setIsTweet] = useState(true);
  const [tweet, setTweet] = useState()
  // const [tweets, setTweets] = useState(data)
 
  const navigate = useNavigate();
  const inputref = useRef(null);
 
  const userDetails = JSON.parse(localStorage.getItem("userData")) || [];
  const userName = userDetails.find((name) => name.active.isActive === true);

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, [userName]);

  function handleTweetInput(e){
    setTweet(e.target.value)
  }

  function handleTweetBtn(){

  }

  return (
    <div className={style.main_div}>
      <div className={style.div1}>
       
        <MenuSection />
      </div>

      <div className={style.div2}>
        <div className={style.scroll}>
          <div className={style.transparent}>
            <div className={style.home}>
              <span title="home page">Home </span>
             
            </div>
            <div className={style.insideHome}>
              <div className={style.foryou} onClick={() => setIsTweet(true)}>
                <p >For you</p>
                {isTweet ? <hr className={style.hrline} /> : ""}
              </div>
              <div
                className={style.following}
                onClick={() => setIsTweet(false)}
              >
                <p >Follwoing</p>
                {isTweet ? "" : <hr className={style.hrline} />}
              </div>
            </div>
          </div>

          <div className={style.textHeader}>
            <div className={style.profileSec}>
              {/* <AccountCircleIcon sx={{ fontSize: '50px' }} /> */}

              {userName ? (
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              ) : (
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              )}
            </div>
            <div className={style.commentText}>
              <Input
              onChange={handleTweetInput}
              value={tweet}
                sx={{
                  width: "100%",
                  fontSize: "1.5rem",
                }}
                placeholder="What's happening?"

              />
              

              <input type="file" ref={inputref} hidden />

              <div className={style.texticons}>
                <div className={style.icons}>
                  <Tooltip title="Media">
                    <PhotoSizeSelectActualIcon
                      onClick={() => inputref.current.click()}
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                        fontSize: "20px",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="GIF">
                    <GifBoxIcon
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                        fontSize: "20px",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Poll">
                    <BallotIcon
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                        fontSize: "20px",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Emoji">
                    <SentimentSatisfiedAltIcon
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                        fontSize: "20px",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Schedule">
                    <WorkHistoryIcon
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                        fontSize: "20px",
                      }}
                    />
                  </Tooltip>
                </div>
                <div className={style.Twittebtn}>
                  <Button
                  onClick={handleTweetBtn}
                    variant="contained"
                    sx={{
                      borderRadius: "35px",
                      marginTop: "5px",
                      textTransform: "capitalize",
                      backgroundColor: 'rgb(29, 155, 240)'
                    }}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={style.profile_div}>

            {isTweet ? <Profiles /> : <UserFollowData />}

           
          </div>
        </div>
      </div>

      <div className={style.div3}>
        <RightSection/>
      </div>
    </div>
  );
}
