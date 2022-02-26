import { Brewery } from '../types';
import axios, { AxiosResponse } from 'axios';

function handleSearchClick(searchTerm: string, setBreweries: React.Dispatch<React.SetStateAction<Brewery[]>>) {

  const options = {
    method: 'GET',
    url: 'https://api.openbrewerydb.org/breweries/search',
    params: {
      query: searchTerm
    }
  }

  const requestUrl = options.url + "?query=" + options.params.query;
  const testUrl = 'api/breweries';

  axios
    .get<Brewery[]>(requestUrl)
    .then((response: AxiosResponse<Brewery[]>) => setBreweries(response.data));
}
export { handleSearchClick };
