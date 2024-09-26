import React, { useState } from 'react';
import {
	MasterContainer,
	StyledContentContainer,
} from '../components/Containers/index.styled';
import {
	StyledBoardContainer,
	StyledImageSplit,
	StyledLeftSection,
	StyledTextSection,
} from '../components/Board/index.styled';
import img1 from '../assets/component-01/Image-01.jpg';
import img2 from '../assets/component-01/Image-02.jpg';
import img3 from '../assets/component-01/Image-03.jpg';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const tiles = [
	{
		id: 1,
		images: [img1, img2, img3],
		title: "ANSWER YOUR BODY'S NEEDS",
		description:
			"The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzker believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs",
		subtitle: 'BE MINDFUL.',
		subtext:
			"Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
	},
];

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

const Board = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	function openModal(image) {
		setIsOpen(true);
		setSelectedImage(image);
	}

	function closeModal() {
		setIsOpen(false);
		setSelectedImage(null);
	}

	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<button
					onClick={closeModal}
					style={{
						border: 'none',
						background: 'none',
						cursor: 'pointer',
						position: 'absolute',
						top: '10px',
						right: '10px',
					}}
				>
					<FaTimes size={24} color={'#0e1414'} />
				</button>
				<div style={{ padding: '20px' }}>
					{selectedImage && (
						<img
							src={selectedImage}
							alt="Selected"
							style={{ width: '100%', height: '100%' }}
						/>
					)}
				</div>
			</Modal>
			<MasterContainer>
				<StyledContentContainer>
					<StyledBoardContainer>
						{tiles.map((tile) => (
							<>
								<StyledLeftSection>
									<img
										src={tile.images[0]}
										alt="Image1"
										onClick={() => openModal(tile.images[0])}
									/>
								</StyledLeftSection>
								<StyledImageSplit>
									<img
										src={tile.images[1]}
										alt="Image2"
										onClick={() => openModal(tile.images[1])}
									/>
									<img
										src={tile.images[2]}
										alt="Image3"
										onClick={() => openModal(tile.images[2])}
									/>
								</StyledImageSplit>
								<StyledTextSection>
									<h2>{tile.title}</h2>
									<hr />
									<p style={{ color: ' #989e9e' }}>{tile.description}</p>
									<p style={{ color: '#bb172f' }}>{tile.subtitle}</p>
									<p>{tile.subtext}</p>
								</StyledTextSection>
							</>
						))}
					</StyledBoardContainer>
				</StyledContentContainer>
			</MasterContainer>
		</>
	);
};

export default Board;
