import { Brewery } from '../types';
import axios, { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction } from 'react';

function handleSearchClick(searchTerm: string, setBreweries: Dispatch<SetStateAction<Brewery[]>>) {

  const options = {
    method: 'GET',
    url: 'https://api.openbrewerydb.org/breweries/search',
    params: {
      query: searchTerm
    }
  }

  const requestUrl = options.url + "?query=" + options.params.query;
  const testUrl = 'api/breweries';
  // testUrl gets full list of breweries from breweries.json

  axios
    .get<Brewery[]>(requestUrl)
    .then((response: AxiosResponse<Brewery[]>) => setBreweries(response.data));
}
export { handleSearchClick };
