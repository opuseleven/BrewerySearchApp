import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Brewery } from '../types';
import { useState } from 'react';
import { SearchForm, RenderBrewery } from '../components';
import { handleSearchClick } from '../services';

const Home: NextPage = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>BrewerySearch</title>
        <meta name="description" content="Search a database of breweries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          BrewerySearch
        </h1>

        <div>
          <SearchForm handleSearchClick={handleSearchClick} setBreweries={setBreweries} />
        </div>

        <div>
          {breweries.map(b => {
            <RenderBrewery brewery={b} />
          })}
        </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
