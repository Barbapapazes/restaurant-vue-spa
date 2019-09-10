import axios from 'axios'

const HTTP = axios.create({
  baseURL: process.env.BASE_URL
})

export default HTTP
