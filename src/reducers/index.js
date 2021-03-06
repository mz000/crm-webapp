import { combineReducers } from 'redux';
import { authentication, register, verificationCode } from './authenticationReducer';
import { alert } from './alertReducer';
import { getCustomers, getCustomer } from './customerReducer'
import { getProducts, addProduct, editProduct } from './productReducer'
import { financeSummary, bill } from './financeReducer'
import { addOrder, getOrders, setOrdersFilter, editOrderStatus, getOrderSms } from './orderReducer'
import { getReminders } from './reminderReducer'
import { getDiscounts } from './discountReducer';
import { addDiscount } from './discountReducer';
import { getEmployees, editEmployee, addEmployee, deleteEmployee, getApplications } from './employeeReducer';
import { getPermissions } from './employeeReducer';
import { getUserInfo } from './userReducer';

export default combineReducers ({
    authentication,
    register,
    alert,
    getProducts,
    addProduct,
    editProduct,
    getCustomers,
    getCustomer,
    financeSummary,
    editOrderStatus,
    bill,
    addOrder,
    getOrders,
    setOrdersFilter,
    getReminders,
    getDiscounts,
    addDiscount,
    getEmployees,
    editEmployee,
    addEmployee,
    deleteEmployee,
    getPermissions, 
    verificationCode,
    getUserInfo,
    getOrderSms,
    getApplications
})