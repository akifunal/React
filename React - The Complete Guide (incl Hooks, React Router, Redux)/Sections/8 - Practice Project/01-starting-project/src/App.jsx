import { useState } from 'react';
import UsersList from './Components/Users/UsersList';
import AddUser from './Components/Users/AddUser';

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList(prevUsersList => [
			...prevUsersList,
			{ name: userName, age: userAge, id: Math.random().toString() },
		]);
	};

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</>
	);
};

export default App;
