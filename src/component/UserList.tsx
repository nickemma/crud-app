import Button from '../feature/Button';
import { useNavigate } from 'react-router-dom';
import TodoCard from './TodoCard';

const UserList = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/add-user');
  };
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'Amanda Corner',
      email: 'amanda@gmail.com',
    },
  ];

  return (
    <div>
      <Button onAddClick={handleAddUser}>Add User</Button>
      <TodoCard users={users} />
    </div>
  );
};

export default UserList;
