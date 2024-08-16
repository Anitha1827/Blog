import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import "./JUNEMemories.css"

const JUNEMemories = () => {
  return (
    <div className='text-black'>
    <Typography
      id="modal-modal-title"
      variant="h6"
      component="h2"
      className="text-pink-600 font-bold"
    >
      JUNE Memories
    </Typography>
    <Typography>
      <h1 className="font-bold">13-JUNE-2021</h1>
      <br />
      <br />
      Its been 2 years. She got a baby!! For past 2 years, for her birthday,
      for her anniversary , I dont forget to celebrate with homeless people
      and children. I dont inform her or send it. i preserve it myself.
      <br />
      <br />
      Lot of pressure from my friends and family to get me married. I said
      “NO”.
      <br />
      How can i be true to that person who get married to me?
      <br />
      <Image
        src="https://10clove.wordpress.com/wp-content/uploads/2021/06/desktop6.jpg?w=1024"
        width={600}
        height={600}
        alt="orphan"
      />
      <br />
      <br />
    </Typography>
  </div>
  
  );
};

export default JUNEMemories;
