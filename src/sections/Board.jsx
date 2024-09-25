import React from 'react';
import {
	MasterContainer,
	StyledContentContainer,
} from '../components/Containers/index.styled';
import {
	StyledContainer,
	StyledImageSplit,
	StyledLeftSection,
	StyledTextSection,
} from '../components/Board/index.styled';
import img1 from '../assets/component-01/Image-01.jpg';
import img2 from '../assets/component-01/Image-02.jpg';
import img3 from '../assets/component-01/Image-03.jpg';

const Board = () => {
	return (
		<MasterContainer>
			<StyledContentContainer>
				<StyledContainer>
					<StyledLeftSection>
						<img src={img1} alt="Image1" />
					</StyledLeftSection>
					<StyledImageSplit>
						<img src={img2} alt="Image2" />
						<img src={img3} alt="Image3" />
					</StyledImageSplit>
					<StyledTextSection>
						<h2>ANSWER YOUR BODY'S NEEDS</h2>
						<hr />
						<p>
							The way ingredients are sourced affects the way we nourish our
							bodies. Author Mark Schatzker believes our body naturally develops
							an appetite for the foods and nutrients it needs to be healthy,
							but that artificial flavourings are getting in the way. This can
							be reversed by focusing on high-quality ingredients and being
							mindful as your appetite guides you to consume according to your
							body's needs
						</p>
						<p style={{ color: '#8b2a3b' }}>BE MINDFUL.</p>
						<p style={{ color: '#f6fafb' }}>
							Sourcing local or organic food is a good way to start being more
							mindful about what you're cooking and eating.
						</p>
					</StyledTextSection>
				</StyledContainer>
			</StyledContentContainer>
		</MasterContainer>
	);
};

export default Board;
