import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
         headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '616b5061e6mshb11d44304a766dbp1c5837jsn25fb914b94e3'
  }
    });
    return data;
}