import styles from '@/styles/pages/Home.module.scss'


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
    <div className={styles.container}>
        {shapes.map(item => (
          <div key={item.id} className={item.shape} />
        ))}
    </div>
  )
}
