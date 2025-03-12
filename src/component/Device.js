import { deviceList } from '../data/DeviceList.js';
import { useState } from 'react';
import '../style/Device.css';

function Device() {
	function generateDevice(setDevice) {
		setDevice(deviceList[Math.floor(Math.random() * deviceList.length)]);
	}

	let [device, setDevice] = useState(
		deviceList[Math.floor(Math.random() * deviceList.length)]
	);
	return (
		<div className="etr-device">
			<h2 className="etr-generator-title">Matériel</h2>
			<h3 className="etr-generator-subtitle">
				Caractéristiques du matériel utilisé:
			</h3>
			<p>{device}</p>
			<button
				className="etr-generator-btn"
				onClick={() => generateDevice(setDevice)}
			>
				Genrere un nouveau device
			</button>
		</div>
	);
}

export default Device;
