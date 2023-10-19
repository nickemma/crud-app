import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../feature/TextField';
import Button from '../feature/Button';

const AddUser: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleAddUser = () => {
    console.log(formData);
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
