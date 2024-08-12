import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const AnniversaryCelebration = () => {
  return (
    <div className="text-black p-4 sm:p-6">
  <Typography
    id="modal-modal-title"
    variant="h6"
    component="h2"
    className="text-pink-600 font-bold text-lg sm:text-2xl"
  >
    Anniversary Celebration
  </Typography>
  <Typography>
    <h1 className="font-bold text-base sm:text-lg">30 JAN 2022</h1>
    <br />
    <br />
    <p className="text-sm sm:text-base">
      It`s our marriage anniversary! Due to COVID restrictions, we were unable
      to take photos or videos at home.
    </p>
    <br />
    <div className="flex justify-center">
      <Image
        src="https://10clove.wordpress.com/wp-content/uploads/2022/01/4x3-copy.jpg"
        width={600}
        height={600}
        alt="anniversary"
        className="w-full sm:w-3/4 h-auto rounded-md"
      />
    </div>
    <br />
  </Typography>
</div>

  );
}

export default AnniversaryCelebration