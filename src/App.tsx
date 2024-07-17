import styles from "./styles/Home.module.css";
import "./styles/index.css";
import { useState } from "react";
import MainArea from "../src/components/MainArea";
import {Button, FileInput, Label, Modal, TextInput} from "flowbite-react";

export default function App() {
	const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
		useState(false);
	const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [width	, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [link, setLink] = useState('');
	const [logo, setLogo] = useState('');

	const closeAll = () => {
		setIsNetworkSwitchHighlighted(false);
		setIsConnectHighlighted(false);
	};


	const byPixel = () =>{
		console.log(width,"width")
		console.log(height,"height")
		console.log(link,"link")
		console.log(logo,"logo")
	}
 	return (
		<>
			<header>
				<div
					className={styles.backdrop}
					style={{
						opacity:
							isConnectHighlighted || isNetworkSwitchHighlighted
								? 1
								: 0,
					}}
				/>

				<div className={styles.header}>
					<div>
						<img
							src="/logo.svg"
							alt="WalletConnect Logo"
							height="32"
							width="203"
						/>
					</div>

					<div className={styles.buttons}>
						<div>
							<Button onClick={() => setOpenModal(true)} className='rounded-3xl text-nowrap' > Buy Pixels</Button>
						</div>
						<div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isNetworkSwitchHighlighted
									? styles.highlightSelected
									: ``
							}`}
						>
							{/*<w3m-network-button />*/}
						</div>
						<div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isConnectHighlighted
									? styles.highlightSelected
									: ``
							}`}
						>
							<w3m-button />
						</div>
					</div>
				</div>
			</header>
			<div className={styles.main}>
				<MainArea/>
				<Modal show={openModal} onClose={() => setOpenModal(false)}>
					<Modal.Header>Buying Pixels For Logo</Modal.Header>
					<Modal.Body>
						<div className="flex max-w-md flex-col gap-4">
							<div>
								<div className="mb-2 block">
									<Label htmlFor="logoWidth" value="Logo Width"/>
								</div>
								<TextInput id="logoWidth" type="number" required
										   onChange={(e) => setWidth(e.target.value)}/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="logoHeight" value="Logo Height"/>
								</div>
								<TextInput id="logoHeight" type="number" required
										   onChange={(e) => setHeight(e.target.value)}/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="link" value="Your Site Link"/>
								</div>
								<TextInput id="link" type="text" onChange={(e) => setLink(e.target.value)}/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="file-upload" value="Upload Logo"/>
								</div>
								<FileInput id="file-upload" onChange={(e) => setLogo(e.target.files[0])}/>
							</div>
							<Button type="submit" onClick={byPixel}>Buy</Button>
						</div>
					</Modal.Body>

				</Modal>
			</div>
		</>
	);
}
