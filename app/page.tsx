import React from 'react'
import Hero from '@/components/Hero'
import styles from '@/styles/styles'
import Info from '@/components/Info'

const Home = () => {
  return (
    <main className={`${styles.flexCenter} flex-col`}>
      <Hero />
      <Info />
    </main>
  )
}

export default Home