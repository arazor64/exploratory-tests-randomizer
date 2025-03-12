import { useState } from 'react';
import { behaviourList } from '../data/BehaviourList.js';
import '../style/Behaviour.css';

function Behaviour() {
	function generateBehaviour(setBehaviour) {
		setBehaviour(
			behaviourList[Math.floor(Math.random() * behaviourList.length)]
		);
	}
	const [behaviour, setBehaviour] = useState(
		behaviourList[Math.floor(Math.random() * behaviourList.length)]
	);
	return (
		<div className="etr-behaviour">
			<h2 className="etr-generator-title">Comportement</h2>
			<h3 className="etr-generator-subtitle">
				Comment se comporte l'utilisateur :
			</h3>
			<p>{behaviour}</p>
			<button
				className="etr-generator-btn"
				onClick={() => generateBehaviour(setBehaviour)}
			>
				Générer un nouveau comportement
			</button>
		</div>
	);
}

export default Behaviour;
