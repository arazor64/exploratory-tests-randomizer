import '../style/Action.css';
import { actionList } from '../data/ActionList.js';
import { useState } from 'react';

function Action({ activeUserType }) {
	let [action, setAction] = useState(generateAction());

	function generateAction() {
		return actionList[activeUserType][
			Math.floor(Math.random() * actionList[activeUserType].length)
		];
	}

	return (
		<div>
			<h3 className="etr-generator-subtitle">
				L'action que l'utilisateur veut réaliser :
			</h3>
			<p>{action}</p>

			<button
				className="etr-generator-btn"
				onClick={() => setAction(generateAction())}
			>
				Générer une nouvelle action
			</button>
		</div>
	);
}

export default Action;
