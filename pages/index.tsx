import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Brewery, TypeFilterState } from '../types';
import { useState, useEffect } from 'react';
import { SearchForm, RenderBrewery, Filters, ListMapSwitch, MapContainer } from '../components';
import { filterByType, typeFilterCheck } from '../services';

const Home: NextPage = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [displayedBreweries, setDisplayedBreweries] = useState<Brewery[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const defaultTypeFilter: TypeFilterState = {
    micro: false,
    brewpub: false,
    contract: false,
    large: false,
    regional: false
  }

  const [typeFilterState, setTypeFilterState] = useState<TypeFilterState>(defaultTypeFilter);
  const [stateFilter, setStateFilter] = useState('');

  useEffect(() => {
    const originalArray = breweries;
    if (showFilters) {
      if (stateFilter !== '') {
        const stateFiltered = originalArray.filter(brewery => brewery.state.toLowerCase() === stateFilter);
        setDisplayedBreweries(stateFiltered);
        if (typeFilterState !== defaultTypeFilter) {
          const typeFiltered = filterByType(typeFilterState, stateFiltered);
          setDisplayedBreweries(typeFiltered);
        }
      } else {
        if (typeFilterCheck(typeFilterState)) {
          const typeFiltered = filterByType(typeFilterState, originalArray);
          setDisplayedBreweries(typeFiltered);
        } else {
          setDisplayedBreweries(originalArray);
        }
      }
    } else {
      setDisplayedBreweries(originalArray);
    }
  }, [breweries]);

  return (
    <div className={styles.container}>
      <Head>
        <title>BrewerySearch</title>
        <meta name="description" content="Search a database of breweries" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
          />
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
                <Filters setStateFilter={setStateFilter} typeFilterState={typeFilterState} setTypeFilterState={setTypeFilterState} />
              )
            }
          </div>
          <ListMapSwitch setShowMap={setShowMap} />
        </div>

        <div>
          {
            showMap && (
              <MapContainer center={[-86.767960,36.174465]} />
            )
          }
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
