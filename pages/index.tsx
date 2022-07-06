import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Brewery, TypeFilterState, defaultTypeFilterState } from '../types';
import { useState, useEffect } from 'react';
import { SearchForm, RenderBrewery, Filters, ListMapSwitch, MapContainer } from '../components';
import { filterByType, typeFilterCheck, filterByHasCoordinates } from '../services';

const Home: NextPage = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [displayedBreweries, setDisplayedBreweries] = useState<Brewery[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedBrewery, setSelectedBrewery] = useState<Brewery>();

  const [typeFilterState, setTypeFilterState] = useState<TypeFilterState>(defaultTypeFilterState);
  const [stateFilter, setStateFilter] = useState('');

  useEffect(() => {
    const originalArray = breweries;
    if (showFilters) {
      if (stateFilter !== '') {
        const stateFiltered = originalArray.filter(brewery => brewery.state.toLowerCase() === stateFilter);
        setDisplayedBreweries(stateFiltered);
        if (typeFilterState !== defaultTypeFilterState) {
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
    if (showMap) {
      setDisplayedBreweries(filterByHasCoordinates(displayedBreweries));
    }
  }, [breweries, showMap]);

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
            <SearchForm setBreweries={setBreweries} setShowMap={setShowMap} />
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
          <ListMapSwitch showMap={showMap} setShowMap={setShowMap} />
        </div>

        <div>
          {
            showMap && (
              <MapContainer arr={displayedBreweries} selectedBrewery={selectedBrewery}
                setSelectedBrewery={setSelectedBrewery} />
            )
          }
        </div>

        <div>
          {
            displayedBreweries && (
              displayedBreweries.map(b => (
                <div key={b.obdb_id ? b.obdb_id.toString() : null}>
                  <RenderBrewery brewery={b} selectedBrewery={selectedBrewery} setSelectedBrewery={setSelectedBrewery} />
                </div>
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
