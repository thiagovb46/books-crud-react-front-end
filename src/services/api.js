import axios  from 'axios'

const api = axios.create ({
    baseURL :'https://backend-books.azurewebsites.net',
})

export default api;