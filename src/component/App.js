import '../style/App.css';
import Banner from './Banner';
import Generator from './Generator';
import Notice from './Notice';
import Footer from './Footer';

function App() {
	return (
		<div className="App">
			<title>Exploratory tests randomizer</title>

			<Banner />
			<div className="etr-layout-inner">
				<Generator />
				<Notice />
			</div>
			<Footer />
		</div>
	);
}

export default App;
