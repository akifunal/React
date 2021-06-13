import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const UserInput = props => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = e => {
		e.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+enteredAge < 1 || +enteredAge > 120) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = e => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = e => {
		setEnteredAge(e.target.value);
	};

	const errorHandler = () => {
		setEnteredAge('');
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						onChange={usernameChangeHandler}
						value={enteredUsername}
					/>
					<label htmlFor='age'>Age (Years)</label>
					<input
						type='number'
						id='age'
						onChange={ageChangeHandler}
						value={enteredAge}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default UserInput;
