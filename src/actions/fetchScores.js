import Axios from 'axios'

function fetchScores(address){

  const url = `http://localhost:3001/api/v1/voting_districts?full_address=${address}`

  // const response = Axios.get(url)

  const response = {
     "scores": {
       "data": {
         "accidents": 69.375,
         "crime": 60.62992125984252,
         "bikes": 48.38709677419355,
         "parks": 37.264150943396224,
         "schools": 12.745936698032507,
         "subways": 67.74193548387096
       }
     },
     "averages": {
       "data": {

         "accidents": 156.4719446159185,
         "bikes": 7,
         "crime": 337.01649609582444,
         "parks": 67,
         "schools": 40.5,
         "subways": 4
       }
     },
     "attributes": {
       "id": 6541,
       "max_latitude": 40.7079673420364,
       "min_latitude": 40.7045490753525,
       "max_longitude": -74.0098658089349,
       "min_longitude": -74.0156539247565,
       "crime": 100,
       "schools": 27,
       "parks": 79,
       "subways": 21,
       "bikes": 30,
       "accidents": 49
     }
  }

  return {
    type: 'FETCH_SCORES',
    payload: response
  }
}
export default fetchScores
