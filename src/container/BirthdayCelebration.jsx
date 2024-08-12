import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BirthdayCelebration = () => {
  return (
    <div className='text-black'>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="text-pink-600 font-bold"
      >
        Birthday Celebration
      </Typography>
      <Typography>
        <h1 className="font-bold">AUG 5 2021</h1>
        <br />
        <br />
        Still few more days for her birthday. Ordered food and few clothes to a
        Orphanage. This time, i planned for bigger way. Not a usual celebration.
        My close friends started to hate me doing this every year. They still
        think that i going to get married. I pretty sure it wont happen for me.
        im happy to live the memories. I dont think what the world or Society
        think.
        <br />
        <br />
        <h1 className="font-bold">AUG 19 2021</h1>
        <br />
        Its her Birthday. The day, i would be most happy thinking for her. I did
        celebration at a home. I asked them to draw, dance, celebrate. etc. Fun
        filled. Happy Birthday Princess!!
        <br />
        <br />
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
          <iframe
            src="https://drive.google.com/file/d/1LNA8l4LSWz5F8MhnDRjYBCu5412xHf3-/preview"
            width="640"
            height="480"
            allow="autoplay"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <br />
        <br />
        <Image
          src="https://10clove.wordpress.com/wp-content/uploads/2021/08/collagemaker_20210818_214520924.jpg?w=1024"
          alt="birthday"
          width={600}
          height={600}
        ></Image>
        <br />
        <br />
      </Typography>
    </div>
  );
};

export default BirthdayCelebration;
