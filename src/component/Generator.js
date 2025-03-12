import '../style/Generator.css';
import Behaviour from './Behaviour';
import Objective from './Objective';
import User from './User';
import Device from './Device';

function MainView() {
	return (
		<div className="etr-generator">
			<User />
			<Objective />
			<Behaviour />
			<Device />
		</div>
	);
}

export default MainView;
