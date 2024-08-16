import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const styles = {
  container: {
    color: 'black',
    padding: '16px', // equivalent to p-4
    paddingBottom: '24px', // for sm:p-6
  },
  title: {
    color: '#D6336C', // equivalent to text-pink-600
    fontWeight: 'bold',
    fontSize: '1.125rem', // equivalent to text-lg
    '@media (min-width: 640px)': {
      fontSize: '1.5rem', // equivalent to sm:text-2xl
    },
  },
  date: {
    fontWeight: 'bold',
    fontSize: '1rem', // equivalent to text-base
    '@media (min-width: 640px)': {
      fontSize: '1.125rem', // equivalent to sm:text-lg
    },
  },
  text: {
    fontSize: '0.875rem', // equivalent to text-sm
    '@media (min-width: 640px)': {
      fontSize: '1rem', // equivalent to sm:text-base
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%', // equivalent to w-full
    '@media (min-width: 640px)': {
      width: '75%', // equivalent to sm:w-3/4
    },
    height: 'auto',
    borderRadius: '8px', // equivalent to rounded-md
  },
};



const AnniversaryCelebration = () => {
  return (
    <div style={styles.container}>
    <Typography
      id="modal-modal-title"
      variant="h6"
      component="h2"
      style={styles.title}
    >
      Anniversary Celebration
    </Typography>
    <Typography>
      <h1 style={styles.date}>30 JAN 2022</h1>
      <br />
      <br />
      <p style={styles.text}>
        It`s our marriage anniversary! Due to COVID restrictions, we were unable
        to take photos or videos at home.
      </p>
      <br />
      <div style={styles.imageContainer}>
        <Image
          src="https://10clove.wordpress.com/wp-content/uploads/2022/01/4x3-copy.jpg"
          width={600}
          height={600}
          alt="anniversary"
          style={styles.image}
        />
      </div>
      <br />
    </Typography>
  </div>
  

  );
}

export default AnniversaryCelebration