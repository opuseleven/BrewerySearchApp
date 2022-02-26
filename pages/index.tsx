import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Brewery } from '../types';
import { useState, useEffect } from 'react';
import { SearchForm, RenderBrewery, Filters } from '../components';

const Home: NextPage = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [displayedBreweries, setDisplayedBreweries] = useState<Brewery[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');

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
          <div>
            <SearchForm setBreweries={setBreweries} />
          </div>
          <div>
            <div>
              <button onClick={() => setShowFilters(!showFilters)}>Filters</button>
            </div>
            {
              showFilters && (
                <Filters setStateFilter={setStateFilter} setTypeFilter={setTypeFilter} />
              )
            }
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
