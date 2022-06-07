import axios from 'axios'
import ServerResponseData from '../interface/ServerResponseData'

const axiosHelper = {
  axiosGet: async (url) => {
    try {
      const rep = await axios.get(url)
      return new ServerResponseData(false, 'success', rep.data)
    } catch (error) {
      const err = error
      return new ServerResponseData(true, err.message)
    }
  }
}

export default axiosHelper
