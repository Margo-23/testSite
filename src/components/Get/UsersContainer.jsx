import { connect } from 'react-redux';
import Users from './Users.jsx';
import {setUsersAC, setPageSizeAC,setTotalUsersCountAC} from '../../redux/redusers/usersReducer';

const mapStateToProps = (state)=>{
   return {
    users: state.getBlock.users,
    pageSize: state.getBlock.pageSize,
    totalUsersCount: state.getBlock.totalUsersCount
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    setUsers: (users)=>{
      dispatch(setUsersAC(users))
    },
    setPageSize: (pageSize)=>{
      dispatch(setPageSizeAC(pageSize))
    },
    setTotalUsersCount: (totalUsersCount)=>{
      dispatch(setTotalUsersCountAC(totalUsersCount))
    },

  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;