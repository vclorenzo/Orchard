import React from 'react';
import {
	MasterContainer,
	StyledContentContainer,
} from '../components/Containers/index.styled';
import {
	StyledCardContainer,
	StyledCards,
	StyledCardText,
} from '../components/Cards/index.styled';
import img1 from '../assets/component-02/Image-01.jpg';
import img2 from '../assets/component-02/Image-02.jpg';
import img3 from '../assets/component-02/Image-03.jpg';
import { StyledTextButton } from '../components/Buttons/index.styled';
import { StyledHeader } from '../components/Headers/index.styled';

const articles = [
	{
		id: 1,
		image: img1,
		title: 'Summer Lunch Menu By Mark Best',
		description:
			"AEG Ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home AEG Ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home",
	},
	{
		id: 2,
		image: img2,
		title: 'A Traditional Christmas Eve, Mark Best Style',
		description:
			"One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests",
	},
	{
		id: 3,
		image: img3,
		title: 'Taking Taste Further',
		description:
			"This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food",
	},
];

const Articles = () => {
	return (
		<MasterContainer>
			<StyledContentContainer>
				<StyledHeader>
					<h2>ALL THE LATEST FROM AEG</h2>
				</StyledHeader>
				<StyledCardContainer>
					{articles.map((article) => (
						<StyledCards key={article.id}>
							<img src={article.image} alt="image" />
							<StyledCardText>
								<h3>{article.title}</h3>
								<p>{article.description}</p>
							</StyledCardText>

							<StyledTextButton>
								<a
									href={`#${article.title}`}
									onClick={() => console.log(article.title)}
								>
									READ MORE
								</a>
							</StyledTextButton>
						</StyledCards>
					))}
				</StyledCardContainer>
			</StyledContentContainer>{' '}
		</MasterContainer>
	);
};

export default Articles;
