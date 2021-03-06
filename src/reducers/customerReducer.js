import { customerConstants } from '../constants'

const initialState = {
    customers: [],
    loading: false
}


export function getCustomers(state = initialState, action){
    
    switch (action.type) {
        case customerConstants.GET_CUSTOMERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case customerConstants.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: action.customers,
                loading: false
            }
        case customerConstants.GET_CUSTOMERS_FAILURE:
            return {
                loading: false
            }
            break;
    
        default:
            return state;
    }
}

export function getCustomer(state = initialState, action){
    switch (action.type) {
        case customerConstants.GET_CUSTOMER_REQUEST:
            return{
                success: false
            }
        case customerConstants.GET_CUSTOMER_SUCCESS:
            return{
                customer: action.customer,
            }
        case customerConstants.GET_CUSTOMER_FAILURE:
            break;
        default:
            return state;
    }
}