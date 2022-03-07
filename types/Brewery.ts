export interface Brewery {
  obdb_id: number,
  name: string,
  brewery_type: string,
  street: string,
  city: string,
  state: string,
  website_url: string,
  longitude?: number,
  latitude?: number
}
