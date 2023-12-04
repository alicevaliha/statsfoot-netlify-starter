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
          Press buttons to access data retrievement ! <code>pages/index.js</code>
        </p>
        <form action=" https://statistiques-foot.vercel.app/api/v1/joueurs" method="get">
          <button type="submit">Acceder aux données des joueurs</button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
