"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useState } from "react";
import WhyilovedHER from "../container/WhyilovedHER";
import SWEETVALENTINESDAY from "@/container/SWEETVALENTINESDAY";
import CURRENTLY from "@/container/CURRENTLY";
import GiftMonth from "@/container/GiftMonth";
import BrokenHeart from "@/container/BrokenHeart";
import BrokenHeartOct from "@/container/BrokenHeartOct.jsx";
import DegreeCertificate from "@/container/DegreeCertificate";
import SweetMemories from "@/container/SweetMemories";
import MissingMemories from "@/container/MissingMemories";
import MissedVIDEOCALL from "../container/MissedVIDEOCALL";
import MArried from "@/container/MArried";
import JUNEMemories from "@/container/JUNEMemories";
import BirthdayCelebration from "@/container/BirthdayCelebration";
import SweetDREAM from "@/container/SweetDREAM";
import AnniversaryCelebration from "@/container/AnniversaryCelebration";
import DepressionMonth from "@/container/DepressionMonth";
import NewGirlCame from "@/container/NewGirlCame";
import BuetibeautifulMemories from "@/container/BuetibeautifulMemories";
import PhoneCover from "@/container/PhoneCover";
import Birthdaycomingsoon from "@/container/Birthdaycomingsoon";
import { Box, Modal } from "@mui/material";
import StarEffect from "@/container/StarEffect";
import Image from "next/image";
import timeline from "@/container/data/timeline.json";
import styles from "./Memories.module.css";

const Memories = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [animationStage, setAnimationStage] = useState("fallAndClose");

  useEffect(() => {
    if (open) {
      setAnimationStage("fallAndClose");

      // Start the expandToRound after fallAndClose ends
      setTimeout(() => setAnimationStage("expandToRound"), 800);

      // Start the returnToOriginal after expandToRound ends
      setTimeout(() => setAnimationStage("returnToOriginal"), 1600);
    } else {
      setAnimationStage("fallAndClose");
    }
  }, [open]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: animationStage === "returnToOriginal" ? 500 : "auto",
    height: animationStage === "returnToOriginal" ? "auto" : 150,
    maxHeight: "400px",
    overflowY: animationStage === "returnToOriginal" ? "auto" : "hidden",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: animationStage === "returnToOriginal" ? "8px" : "50%",
    animation:
      animationStage === "fallAndClose"
        ? "fallAndClose 0.8s ease-out"
        : animationStage === "expandToRound"
        ? "expandToRound 0.8s ease-out"
        : "returnToOriginal 0.8s ease-out",
  };

  const handleOpen = (val: any) => {
    try {
      console.log(val);
      if (val && val.id) {
        setActive(val.id);
        setOpen(true);
      } else {
        console.error("Invalid value:", val);
      }
    } catch (error) {
      console.error("Error in handleOpen:", error);
    }
  };

  const handleClose = () => setOpen(false);

  const renderModal = () => {
    switch (active) {
      case 1:
        return <WhyilovedHER />;
      case 2:
        return <SWEETVALENTINESDAY />;
      case 3:
        return <CURRENTLY />;
      case 4:
        return <GiftMonth />;
      case 5:
        return <BrokenHeart />;
      case 6:
        return <BrokenHeartOct />;
      case 7:
        return <DegreeCertificate />;
      case 8:
        return <SweetMemories />;
      case 9:
        return <MissingMemories />;
      case 10:
        return <MissedVIDEOCALL />;
      case 11:
        return <MArried />;
      case 12:
        return <JUNEMemories />;
      case 13:
        return <BirthdayCelebration />;
      case 14:
        return <SweetDREAM />;
      case 15:
        return <AnniversaryCelebration />;
      case 16:
        return <DepressionMonth />;
      case 17:
        return <NewGirlCame />;
      case 18:
        return <BuetibeautifulMemories />;
      case 19:
        return <PhoneCover />;
      case 20:
        return <Birthdaycomingsoon />;
      default:
        return null;
    }
  };
  //datas coming from timeline.json
  const timelineData = timeline;

  return (
    <>
      <div className={styles.timelineBackground}>
        <div className={styles.stars}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={styles.star}
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
              }}
            ></div>
          ))}
        </div>
        <div className={styles.clouds}></div>

        <VerticalTimeline>
          {timelineData.map((val, idx) => (
            <VerticalTimelineElement
              key={idx}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              date={val.content}
              icon={
                <Image
                  src={val.img}
                  width={100}
                  height={100}
                  alt="logo"
                  style={{ borderRadius: "20px", height: "100%" }}
                />
              }
              visible={true}
            >
              <h3 className="vertical-timeline-element-title">{val.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {val.subtitle}
              </h4>
              <p>{val.content}</p>
              <div className={styles.floatRight}>
                <button
                  className={styles.readMoreBtn}
                  id="read-more-btn"
                  onClick={() => handleOpen(val)}
                >
                  Read More
                </button>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <div className={styles.py20}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>{renderModal()}</Box>
        </Modal>
      </div>
    </>
  );
};

export default Memories;
