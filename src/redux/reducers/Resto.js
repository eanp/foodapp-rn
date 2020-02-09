const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const resto = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESTO_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'GET_RESTO_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case 'GET_RESTO_FULFILLED':
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false
      }
    default:
      return state
  }
}

export default resto