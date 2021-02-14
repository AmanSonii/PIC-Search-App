import axios from 'axios';

export default axios.create({
baseURL:'https://api.unsplash.com/',
 
headers:{
    Authorization: 'Client-ID 467f2f0f98e7bab9a259c85adbf016e470ee90ad413a7474c9932541f0a0d540'
  }
})