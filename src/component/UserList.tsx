import Button from '../feature/Button';
import { useNavigate } from 'react-router-dom';
import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';
import { UserState } from '../types/userState';

import { RootState } from '../configureStore';

const UserList = () => {
  const state: UserState = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/add-user');
  };

  return (
    <div>
      <Button onAddClick={handleAddUser}>Add User</Button>
      <TodoCard users={state.users} />
    </div>
  );
};

export default UserList;
