import { Typography } from "@mui/material";
import React from "react";

const SWEETVALENTINESDAY = () => {
  return (
    <div className='text-black'>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="text-pink-600 font-bold"
      >
        SWEET VALENTINE’S DAY
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        I just proposed her in a very.. What to say.. like Anniyan Ambi way.. i
        just told this
        <br />
        “Dear ___, i tried much but i cant able. I LOVE YOU SO MUCH. But i am
        not in good position. I am a hindu. If in case even i ready to convert
        to christian, i dont know weather your family will accept me. I am
        unlucky. And i miss you so much.”
        <br />
        <br />
        She said Nothing.
      </Typography>
    </div>
  );
};

export default SWEETVALENTINESDAY;
