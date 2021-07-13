import { GET_DB, GET_TENCOUNTRIES, GET_BYNAME, GET_ALL, GET_ALL_ACTIVITIES } from "./actions/actionTypes";

const initialState = {
    getDB: [],
    getTenCountries: [],
    getByName: [],
    getAll: [],
    getAllActivities: []
  };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DB :
      return {
        ...state,
        getDB:action.payload
      }
    case GET_TENCOUNTRIES :
      return {
        ...state,
        getTenCountries: action.payload
      }

    case GET_BYNAME :
      return {
        ...state,
        getByName: action.payload
      }
    
      case GET_ALL :
        return {
          ...state,
          getAll: action.payload
        }

      case GET_ALL_ACTIVITIES :
        return {
          ...state,
          getAllActivities: action.payload
        }

      default:
        return {
          ...state
        }
      }
  }

export default reducer 