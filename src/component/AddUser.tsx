import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../feature/TextField';
import Button from '../feature/Button';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

const AddUser: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleAddUser = () => {
    const { name, email } = formData;
    if (!name || !email) {
      alert('Please enter name and email');
      return;
    }
    // Dispatch the addUser action with the new user data
    dispatch(
      addUser({
        id: Math.floor(Math.random() * 100) + 1, // Generate random number for id
        name,
        email,
      })
    );
    setFormData({ name: '', email: '' });
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
      <Button onAddClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
