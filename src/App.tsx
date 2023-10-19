import AddUser from './component/AddUser';
import UserList from './component/UserList';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-2xl text-center font-bold text-gray-700 mb-3">
        Crud With Redux Toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
};

export default App;
