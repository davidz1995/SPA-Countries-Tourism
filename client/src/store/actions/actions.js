import { GET_DB, GET_TENCOUNTRIES,GET_BYNAME, GET_ALL, GET_ALL_ACTIVITIES } from "./actionTypes";
import axios from "axios";
import { COUNTRY_URL } from '../../constants'

export const getDB = () => {
  return async () => {
    const response = await axios.get(COUNTRY_URL)
        return { type: GET_DB, payload: response.data}
          }
        }

export const getTenCountries = () => {
  return async (dispatch) => {
    const response = await axios.get(COUNTRY_URL)
      dispatch({type:GET_TENCOUNTRIES, payload: response.data  })
  }
}

export const getByName = (name) => {
  return async (dispatch) => {
    if (name) {
      const response = await axios.get(COUNTRY_URL + '?name=' + name)
      let error = [{name: 'Not found'}]
      console.log(response)
      if(response.status === 200) dispatch({type: GET_BYNAME, payload: response.data})
      if(response.status === 404) dispatch({type: GET_BYNAME, payload: error})
    } 
  }
}

export const getAll = () => {
  return async (dispatch) => {
      const response = await axios.get(COUNTRY_URL + '/showAll')
          dispatch({ type:GET_ALL, payload: response.data})
    }
  }

export const getAllActivities = () => {
  return async(dispatch) => {
    const response = await axios.get('http://localhost:3001/activities')
      dispatch({type: GET_ALL_ACTIVITIES, payload: response.data })
  }
}




