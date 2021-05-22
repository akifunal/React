import { useState } from 'react';
import UsersList from './Components/Users/UsersList';
import AddUser from './Components/Users/AddUser';

import styles from './App.module.css';

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList(prevUsersList => [
			...prevUsersList,
			{ name: userName, age: userAge, id: Math.random().toString() },
		]);
	};

	return (
		<div className={styles.root}>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
};

export default App;
