const SET_USERS ='SET_USERS';
const SET_PAGE_SIZE ='SET_PAGE_SIZE';
const SET_TOTAL_COUNT ='SET_TOTAL_COUNT';
const SET_POSITIONS ='SET_POSITIONS';
const ADD_USER ='ADD_USER';


let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    positions: []
}

const usersReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
            case SET_PAGE_SIZE:
                return {
                    ...state,
                    pageSize: action.pageSize
                }
                case SET_TOTAL_COUNT:
                    return {
                        ...state,
                        totalUsersCount: action.totalUsersCount
                    }
                    case SET_POSITIONS:
                        return {
                            ...state,
                            positions: [...action.positions]
                        }  
                        case ADD_USER:
                            return {
                                ...state,
                                users: [{...action.user}, ...state.users ]
                            }   
  
        default:
            return state;           
    }
} 

export const setUsersAC = (users)=>({type: SET_USERS, users});
export const setPageSizeAC = (pageSize)=>({type: SET_PAGE_SIZE, pageSize});
export const setTotalUsersCountAC = (totalUsersCount)=>({type: SET_TOTAL_COUNT, totalUsersCount});
export const setPositionsAC = (positions)=>({type: SET_POSITIONS, positions});
export const addUserAC = (user)=>({type: ADD_USER, user});



export default usersReducer;