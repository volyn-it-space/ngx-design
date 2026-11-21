import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Wine {
	name: string;
	grape: string;
	year: string;
	glass: string;
	bottle: string;
}

interface Region {
	name: string;
	wines: Wine[];
}

interface Flight {
	name: string;
	theme: string;
	wines: string[];
	price: string;
}

interface CellarFact {
	value: string;
	label: string;
}

interface Tasting {
	day: string;
	title: string;
	note: string;
	price: string;
}

interface VisitDetail {
	label: string;
	text: string;
}

/** Pexels serves a cropped copy at exactly this size, so `width` / `height` match the file. */
const pexels = (id: number, width: number, height: number, alt: string): Photo => ({
	src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${width}&h=${height}`,
	alt,
	width,
	height,
});

@Component({
	imports: [RouterLink, NgOptimizedImage],
	templateUrl: './wine-cellar.component.html',
	styleUrl: './wine-cellar.component.scss',
})
export class WineCellarComponent {
	protected readonly heroPhoto = pexels(
		31631254,
		540,
		900,
		'Rows of wine bottles lying on shelves in a dimly lit cellar',
	);

	protected readonly regions: Region[] = [
		{
			name: 'Piemonte',
			wines: [
				{
					name: 'Barolo, Serralunga',
					grape: 'Nebbiolo',
					year: '2018',
					glass: '$28',
					bottle: '$140',
				},
				{
					name: "Barbera d'Alba Superiore",
					grape: 'Barbera',
					year: '2021',
					glass: '$14',
					bottle: '$62',
				},
				{ name: 'Roero Arneis', grape: 'Arneis', year: '2022', glass: '$13', bottle: '$56' },
			],
		},
		{
			name: 'Burgundy',
			wines: [
				{
					name: 'Gevrey-Chambertin, old vines',
					grape: 'Pinot Noir',
					year: '2019',
					glass: '$32',
					bottle: '$180',
				},
				{
					name: 'Chablis Premier Cru',
					grape: 'Chardonnay',
					year: '2021',
					glass: '$19',
					bottle: '$92',
				},
				{
					name: 'Bourgogne Aligoté',
					grape: 'Aligoté',
					year: '2022',
					glass: '$13',
					bottle: '$58',
				},
			],
		},
		{
			name: 'Mosel',
			wines: [
				{
					name: 'Riesling trocken, slate slopes',
					grape: 'Riesling',
					year: '2021',
					glass: '$18',
					bottle: '$80',
				},
				{
					name: 'Riesling Kabinett',
					grape: 'Riesling',
					year: '2020',
					glass: '$15',
					bottle: '$68',
				},
				{
					name: 'Spätburgunder',
					grape: 'Pinot Noir',
					year: '2020',
					glass: '$17',
					bottle: '$76',
				},
			],
		},
	];

	protected readonly flightsPhoto = pexels(
		8775391,
		1200,
		480,
		'Three glasses of red, white and rosé wine on a dimly lit table',
	);

	protected readonly flights: Flight[] = [
		{
			name: 'Old World reds',
			theme: 'Three hillsides, from light to firm.',
			wines: ["Barbera d'Alba 2021", 'Gevrey-Chambertin 2019', 'Barolo, Serralunga 2018'],
			price: '$38',
		},
		{
			name: 'Slate and stone',
			theme: 'Dry whites that taste of where they grew.',
			wines: ['Roero Arneis 2022', 'Riesling trocken 2021', 'Chablis Premier Cru 2021'],
			price: '$32',
		},
		{
			name: 'One grape, three places',
			theme: 'Pinot Noir, poured side by side.',
			wines: ['Spätburgunder 2020', 'Bourgogne rouge 2021', 'Gevrey-Chambertin 2019'],
			price: '$42',
		},
	];

	protected readonly cellarPhoto = pexels(
		30832872,
		800,
		1000,
		'Oak barrels in rows on the floor of a dark wine cellar',
	);

	protected readonly cellarFacts: CellarFact[] = [
		{ value: '1,400', label: 'bottles resting under the vault' },
		{ value: '14', label: 'regions on the full list' },
		{ value: '13°C', label: 'all year, summer and winter' },
	];

	protected readonly tastingsPhoto = pexels(
		11851422,
		600,
		800,
		'Wine bottles and glasses on wooden shelves in a dim cellar',
	);

	protected readonly tastings: Tasting[] = [
		{
			day: 'First Thursday',
			title: 'Nebbiolo, young and old',
			note: 'Five wines from Langhe to Barolo, with a board of aged cheese.',
			price: '$65',
		},
		{
			day: 'Second Tuesday',
			title: 'Grower Champagne',
			note: 'Four small houses, poured with oysters and salted butter.',
			price: '$80',
		},
		{
			day: 'Third Thursday',
			title: 'Riesling, dry to sweet',
			note: 'Six glasses down the Mosel, ending with a late-harvest wine.',
			price: '$55',
		},
		{
			day: 'Last Saturday',
			title: 'Open cellar',
			note: 'Bottles from the back shelves, opened and sold by the glass.',
			price: 'No ticket',
		},
	];

	protected readonly visitPhoto = pexels(
		31011781,
		900,
		600,
		'Row of red wine glasses lined up on a bar counter',
	);

	protected readonly visitDetails: VisitDetail[] = [
		{ label: 'Address', text: '47 Cellar Lane, Old Quarter. Down the stairs by the cheesemonger.' },
		{ label: 'Hours', text: 'Tuesday to Saturday, 5pm to 11pm. Boards and small plates until 10pm.' },
		{ label: 'Corkage', text: '$30 a bottle, two bottles per table.' },
	];
}
