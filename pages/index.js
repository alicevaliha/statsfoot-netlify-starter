import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Press buttons to access data retrievement ! 
        </p>
        <form action=" https://statistiques-foot.vercel.app/api/v1/joueurs" method="get">
          <button type="submit">Acceder aux données des joueurs</button>
        </form>
        <br></br> <br></br>
        <form action=" https://statistiques-foot.vercel.app/api/v1/equipes" method="get">
          <button type="submit">Acceder aux données des équipes</button>
        </form>
        <br></br> <br></br>
        <form action=" https://statistiques-foot.vercel.app/api/v1/competitions" method="get">
          <button type="submit">Acceder aux données des compétitioins</button>
        </form>
        <br></br> <br></br>
        <form action=" https://statistiques-foot.vercel.app/api/v1/matches" method="get">
          <button type="submit">Acceder aux données des matchs</button>
        </form>
        <br></br> <br></br>
        <form action=" https://statistiques-foot.vercel.app/api/v1/passes" method="get">
          <button type="submit">Acceder aux données des passes</button>
        </form>
        <br></br> <br></br>
        <form action=" https://statistiques-foot.vercel.app/api/v1/possessions" method="get">
          <button type="submit">Acceder aux données des possessions</button>
        </form>
        <br></br> <br></br>
        <form action=" https://statistiques-foot.vercel.app/api/v1/actions" method="get">
          <button type="submit">Acceder aux données des actions </button>
        </form>
        <br></br> <br></br>
        <form action=" https://statistiques-foot.vercel.app/api/v1/cartons" method="get">
          <button type="submit">Acceder aux données  des cartons</button>
        </form>
        <br></br> <br></br>
      </main>

      <Footer />
    </div>
  )
}
