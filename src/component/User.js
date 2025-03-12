import { useState } from 'react';
import { userList } from '../data/UserList';

import '../style/User.css';

function User() {
	function generateUser(setUser) {
		setUser(userList[Math.floor(Math.random() * userList.length)]);
	}

	let [user, setUser] = useState(
		userList[Math.floor(Math.random() * userList.length)]
	);

	return (
		<div className="etr-user">
			<h2 className="etr-generator-title">Caractéristiques principales</h2>
			<h3 className="etr-generator-subtitle">Utilisateur:</h3>
			<p>{user.name}</p>
			<h3 className="etr-generator-subtitle">age:</h3>
			<p>{user.age} ans</p>
			<h3 className="etr-generator-subtitle">
				Comprehension de l'informatique:
			</h3>
			<p>{user.digitalSkills}/5</p>
			<h3 className="etr-generator-subtitle">language:</h3>
			<p>{user.language}</p>
			<h3 className="etr-generator-subtitle">spécificités:</h3>{' '}
			<p>{user.caracteristics}</p>
			<button
				className="etr-generator-btn"
				onClick={() => generateUser(setUser)}
			>
				Générer un nouveau modèle
			</button>
		</div>
	);
}
export default User;
