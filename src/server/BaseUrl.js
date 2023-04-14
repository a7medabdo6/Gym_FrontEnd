import axios from 'axios';

const baseurl_Server = axios.create({ baseURL: 'http://167.71.56.133/api' });
// const baseurl_Dev = axios.create({ baseURL: 'http://localhost:5000/' });

//http://137.184.12.206/api/

export default baseurl_Server;
