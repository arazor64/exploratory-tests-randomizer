import logo from '../assets/logo.png';
import '../style/Banner.css';
function Banner() {
	const TITLE = 'Exploratory tests randomizer';
	return (
		<div className="etr-banner">
			<h1 className="etr-title">{TITLE.toUpperCase()}</h1>
			<img
				className="etr-logo"
				src={logo}
			/>
		</div>
	);
}

export default Banner;
