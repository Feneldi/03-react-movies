import axios from 'axios';

export default async function getImagesByQuery(query: string) {
  const myApiKey = '49804709-aae3b3a79effefed9454c2d6d';
  const url = 'https://pixabay.com/api/';

  const response = await axios.get(url, {
    params: {
      key: myApiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
