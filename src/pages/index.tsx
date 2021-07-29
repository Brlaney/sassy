import { motion } from 'framer-motion'
import styles from '@/styles/pages/Home.module.scss'

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const shapes = [
    { id: 1, shape: 'va' },
    { id: 2, shape: 'vb' },
    { id: 3, shape: 'vc' },
    { id: 4, shape: 'vd' },
    { id: 5, shape: 've' },
    { id: 6, shape: 'va' },
    { id: 7, shape: 'vb' },
    { id: 8, shape: 'vc' },
    { id: 9, shape: 'vd' },
    { id: 10, shape: 've' },
    { id: 11, shape: 'va' },
    { id: 12, shape: 'vb' }
  ]

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <motion.div variants={stagger} className={styles.container}>
        {shapes.map(item => (
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} key={item.id} className={item.shape} />
        ))}
      </motion.div>
    </motion.div>
  )
}
