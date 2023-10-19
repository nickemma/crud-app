import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../feature/TextField';
import Button from '../feature/Button';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';

interface User {
  id: number;
  name: string;
  email: string;
}

interface EditUserProps {
  user: User;
}

const EditUser: React.FC<EditUserProps> = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
  });

  const handleEditUser = () => {
    const { name, email } = formData;
    dispatch(
      updateUser({
        id: Math.floor(Math.random() * 100) + 1,
        name,
        email,
      })
    );
    navigate('/');
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: 'text', placeholder: 'Enter your name' }}
        value={formData.name}
        onAddChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: 'email', placeholder: 'Enter your Email' }}
        value={formData.email}
        onAddChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Button onAddClick={handleEditUser}>Submit</Button>
    </div>
  );
};

export default EditUser;
