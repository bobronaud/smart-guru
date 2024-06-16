export type CardData = {
	organization: string;
	organizationImg: string;
	name: string;
	direction: 'Анализ данных';
	description: string;
	img: string;
	raiting: number;
	price: string;
	duration: string;
	status: 'inProgress' | 'almostFinished' | 'finished';
	placesLeft: number;
};
