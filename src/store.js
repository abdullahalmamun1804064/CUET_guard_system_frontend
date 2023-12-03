import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

import { batchReducer } from './redux/reducers/batchReducers';
import { departmentsReducer } from './redux/reducers/departmentReducers';
import { jobFieldReducer } from './redux/reducers/jobFieldReducers';
import { jobOrgReducer } from './redux/reducers/jobOrgReducers';
import { blogReducer } from './redux/reducers/blogReducer';
import { blogCommentReducer } from './redux/reducers/blogCommentReducer';
import { eventReducer } from './redux/reducers/eventRedcer';
import { jobPostReducer } from './redux/reducers/jobPostReducer';
import { committeeReducer } from './redux/reducers/committeeReducer';




const reducer = combineReducers({

    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    batch: batchReducer,
    department: departmentsReducer,
    jobFields: jobFieldReducer,
    jobOrgs: jobOrgReducer,
    blogs: blogReducer,
    blogComment: blogCommentReducer,
    events: eventReducer,
    jobpost: jobPostReducer,
    committee: committeeReducer,

})


let initialState = {
    user: {
        name: '',
        email: '',
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;