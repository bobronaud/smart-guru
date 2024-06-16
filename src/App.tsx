import imgCourse from '@/assets/mockImages/imageCourse.png';
import imgOrg from '@/assets/mockImages/imageOrg.png';
import CardCourse from './components/cardCourse/CardCourse';
import { CardData } from './types/course';

const cardData: CardData = {
	organization: 'Skypro',
	organizationImg: imgOrg,
	name: 'Аналитик данных с нуля',
	direction: 'Анализ данных',
	description:
		'Курс "Искусство Письма: Основы и Техники" представляет собой глубокое погружение в мир писательского мастерства. В рамках этого курса мы рассмотрим все аспекты процесса написания, начиная с развития творческого мышления и заканчивая окончательным редактированием и самопубликацией произведений.',
	img: imgCourse,
	raiting: 4,
	price: 'от 45 тыс',
	duration: '24 месяца',
	status: 'inProgress',
	placesLeft: 5,
};

const App = () => {
	return (
		<div style={{ margin: '50px' }}>
			<CardCourse data={cardData} />
		</div>
	);
};

export default App;
