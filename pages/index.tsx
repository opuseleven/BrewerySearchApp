import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Brewery, TypeFilterState, defaultTypeFilterState } from '../types';
import { useState, useEffect } from 'react';
import { SearchForm, RenderBrewery, Filters, ListMapSwitch, MapContainer, DarkModeButton } from '../components';
import { filterByType, typeFilterCheck, filterByHasCoordinates } from '../services';

const Home: NextPage = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [displayedBreweries, setDisplayedBreweries] = useState<Brewery[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedBrewery, setSelectedBrewery] = useState<Brewery>();

  const [typeFilterState, setTypeFilterState] = useState<TypeFilterState>(defaultTypeFilterState);
  const [stateFilter, setStateFilter] = useState('');
  const [darkMode, setDarkMode] = useState(true);

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
    <div className={darkMode ? styles.containerdark : styles.container}>
      <Head>
        <title>BrewerySearch</title>
        <meta name="description" content="Search a database of breweries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={darkMode ? styles.maindark : styles.main}>

        <h1 className={darkMode ? styles.titledark : styles.title}>
          <span>Brewery</span><span>Search</span>
        </h1>

        <div>

          <div>
            <SearchForm setBreweries={setBreweries} setShowMap={setShowMap} />
          </div>

          <div>
            <div className={styles.buttonscontainer}>

              <button onClick={() => setShowFilters(!showFilters)}>
                Filters  {showFilters ? String.fromCharCode(9662) : String.fromCharCode(9656)}
              </button>

              <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />

            </div>
            {
              showFilters && (
                <Filters setStateFilter={setStateFilter} typeFilterState={typeFilterState}
                  setTypeFilterState={setTypeFilterState} />
              )
            }
          </div>

          <ListMapSwitch showMap={showMap} setShowMap={setShowMap} />
        </div>

        <div>
          {
            showMap && (
              <MapContainer arr={displayedBreweries} selectedBrewery={selectedBrewery}
                setSelectedBrewery={setSelectedBrewery} darkMode={darkMode} />
            )
          }
        </div>

        <div>
          {
            displayedBreweries && (
              displayedBreweries.map(b => (
                <div key={b.obdb_id ? b.obdb_id.toString() : null}>
                  <RenderBrewery brewery={b} selectedBrewery={selectedBrewery}
                    setSelectedBrewery={setSelectedBrewery} darkMode={darkMode} />
                </div>
              ))
            )
          }
        </div>

      </main>

      <footer className={styles.footer}>
        <p className={darkMode ? styles.footertextdark : styles.footertext}>
          Data provided by: <a href={'https://www.openbrewerydb.org/'} target='_blank' rel="noreferrer">Open Brewery DB</a>
        </p>
      </footer>
    </div>
  )
}

export default Home
