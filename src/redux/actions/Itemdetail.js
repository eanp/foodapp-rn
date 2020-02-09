import axios from 'axios'
import { APP_URL } from './config'

const url = APP_URL.concat(`admin/items`)


export const getItems = () => {
    return {
        type: 'GET_ITEMS',
        payload: axios.get(url)
    }
}