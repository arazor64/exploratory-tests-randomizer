import { useState } from 'react';
import { userTypeList } from '../data/UserTypeList.js';

import Action from './Action.js';
import '../style/Objective.css';

function Objective() {
	let [activeUserType, setActiveUserType] = useState('customer');

	return (
		<div className="etr-objective">
			<h2 className="etr-generator-title">Objectif</h2>
			<h3 className="etr-generator-subtitle">
				Quel est le rôle de ton utilisateur?
			</h3>
			<select onChange={(e) => setActiveUserType(e.target.value)}>
				{userTypeList.map((userType) => (
					<option
						key={userType}
						value={userType}
					>
						{userType}
					</option>
				))}
			</select>
			<Action activeUserType={activeUserType} />
		</div>
	);
}

export default Objective;
