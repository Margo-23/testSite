import { connect } from 'react-redux';
import NewUser from './NewUser.jsx';
import {addUserAC, setPositionsAC, setUsersAC} from '../../redux/redusers/usersReducer';



const mapStateToProps = (state)=>{
   return {
    positions: state.getBlock.positions,
    users: state.users
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    setPositions: (positions)=>{
      dispatch(setPositionsAC(positions))
    },
    addUser: (user)=>{
      dispatch(addUserAC(user))
    },
    setUsers: (users)=>{
        dispatch(setUsersAC(users))
    }

  }
}
const NewUserContainer = connect(mapStateToProps, mapDispatchToProps)(NewUser);
export default NewUserContainer;