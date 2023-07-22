import Head from 'next/head';
import Card from '../components/Card';
import Settings from '../components/Settings';
import styles from '../styles/Home.module.css';
import Metamorfosis from '../public/metamorfosis.svg';
import PedroParamo from '../public/pedro.svg';
import Milnov from '../public/milnov.svg';
import { MainHeader } from '../styles/index.style';
import BookCard from '../components/BookCard';

export const books = [
  {
    id: 1,
    name: 'La metamorfosis',
    src: Metamorfosis,
    author: 'Franz Kafka',
    details: `
      Cuenta la historia de la transformación de Gregorio Samsa en un monstruoso insecto, 
      y del drama familiar que se desata a raíz de este acontecimiento.
    `,
  },
  {
    id: 2,
    name: '1984',
    src: Milnov,
    author: 'George Orwell',
    details: `
      La trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en 
      constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden.
    `,
  },
  {
    id: 3,
    name: 'Pedro Páramo',
    src: PedroParamo,
    author: 'Juan Rulfo',
    details: `
      La novela cuenta cómo el protagonista, Juan Preciado, va en busca de su padre, Pedro Páramo, hasta el pueblo mexicano 
      de Comala, un lugar vacio, misterioso, sin vida. Allí, el joven descubrirá que toda la gente del pueblo se llama Páramo, 
      que muchos de ellos son sus propios hermanos, y que Pedro Páramo está muerto.
    `,
  },
];


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Airlike manager</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainHeader>
          <h4>Biblioteca</h4>
          <h2>Clásicos</h2>
          {
            books.map(b => (
              <BookCard key={b.id} {...b}/>
            ))
          }
        </MainHeader>
      </div>
    </>
  )
}
