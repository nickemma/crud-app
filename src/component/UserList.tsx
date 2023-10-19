import Button from '../feature/Button';
import { useNavigate } from 'react-router-dom';
import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';
import { UserState } from '../types/userState';

const UserList = () => {
  const users = useSelector((state: UserState) => state.users);
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/add-user');
  };

  return (
    <div>
      <Button onAddClick={handleAddUser}>Add User</Button>
      <TodoCard users={users} />
    </div>
  );
};

export default UserList;
