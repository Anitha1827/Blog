import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import "./BirthdayCelebration.jsx";

const BirthdayCelebration = () => {
  return (
    <div className="container">
    <Typography
      id="modal-modal-title"
      variant="h6"
      component="h2"
      className="title"
    >
      Birthday Celebration
    </Typography>
    <Typography>
      <h1 className="heading">AUG 5 2021</h1>
      <br />
      <br />
      Still few more days for her birthday. Ordered food and few clothes to an
      Orphanage. This time, I planned for a bigger way. Not a usual celebration.
      My close friends started to hate me doing this every year. They still
      think that I am going to get married. I`m pretty sure it won’t happen for me.
      I`m happy to live the memories. I don’t think about what the world or Society
      thinks.
      <br />
      <br />
      <h1 className="heading">AUG 19 2021</h1>
      <br />
      It`s her Birthday. The day I would be most happy thinking of her. I did a
      celebration at a home. I asked them to draw, dance, celebrate, etc. Fun-filled.
      Happy Birthday, Princess!!
      <br />
      <br />
      <div className="videoContainer">
        <iframe
          src="https://drive.google.com/file/d/1LNA8l4LSWz5F8MhnDRjYBCu5412xHf3-/preview"
          width="640"
          height="480"
          allow="autoplay"
          className="video"
        ></iframe>
      </div>
      <br />
      <br />
      <Image
        src="https://10clove.wordpress.com/wp-content/uploads/2021/08/collagemaker_20210818_214520924.jpg?w=1024"
        alt="birthday"
        width={600}
        height={600}
        className="image"
      ></Image>
      <br />
      <br />
    </Typography>
  </div>
  
  );
};

export default BirthdayCelebration;
