import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Brewery } from '../types';
import { useState, useEffect } from 'react';
import { SearchForm, RenderBrewery } from '../components';
import { handleSearchClick, useField, getBrewery, renderBrewery } from '../services';

const Home: NextPage = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [displayedBreweries, setDisplayedBreweries] = useState<Brewery[]>([]);

  const searchInput = useField('text');

  const handleClick = (e: any) => {
    e.preventDefault();
    handleSearchClick(searchInput.value, setBreweries);
    setDisplayedBreweries(breweries);
  }

  useEffect(() => {
    setDisplayedBreweries(breweries);
  }, [breweries]);

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
          <div className={styles.searchformcontainer}>
            <form className={styles.searchform} onSubmit={handleClick}>
              <input {...searchInput} />
              <button className={styles.submitbutton} >Submit</button>
            </form>
          </div>
        </div>

        <div>
          {
            displayedBreweries && (
              displayedBreweries.map(b => (
                <RenderBrewery brewery={b} />
              ))
            )
          }
        </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
