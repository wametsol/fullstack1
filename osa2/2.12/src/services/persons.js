import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/'

const getAll = () => {
    const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
/*
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response=>response.data)
}

const destroy = (id)=> {
    const request = axios.delete(`${baseUrl}/${id}`)
  return getAll()
}
*/



export default { getAll}