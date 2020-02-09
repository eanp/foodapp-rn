import axios from 'axios'
import { APP_URL } from './config'

const url = APP_URL.concat(`admin/resto`)

export const getResto = () => {
    return {
        type: 'GET_RESTO',
        payload: axios.get(url)
    }
}
