import type { Brewery } from '../../types';
import type { NextApiRequest, NextApiResponse } from 'next';

const breweries = require('../../data/breweries.json');

export default function handler(req: NextApiRequest, res: NextApiResponse<Brewery[]>) {
  res.status(200).json(breweries);
}
