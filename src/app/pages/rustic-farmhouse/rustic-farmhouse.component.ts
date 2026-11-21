import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Season {
	name: string;
	months: string;
	grows: string;
	dish: string;
	current: boolean;
}

interface Supplier {
	name: string;
	gives: string;
	km: string;
}

interface Block {
	title: string;
	text: string;
	photo: Photo;
}

interface Fact {
	label: string;
	value: string;
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
	templateUrl: './rustic-farmhouse.component.html',
	styleUrl: './rustic-farmhouse.component.scss',
})
export class RusticFarmhouseComponent {
	protected readonly collage: Photo[] = [
		pexels(33984944, 800, 800, 'Fresh tomatoes and jars of pickled vegetables in a farm kitchen'),
		pexels(15698595, 640, 640, 'Basket of freshly dug carrots with a garden spade'),
		pexels(36781940, 640, 640, 'Zucchini and squash blossoms on a wooden table'),
	];

	protected readonly seasons: Season[] = [
		{
			name: 'Spring',
			months: 'March to May',
			grows: 'Asparagus, rhubarb, wild garlic',
			dish: 'Asparagus on toast with a soft egg',
			current: false,
		},
		{
			name: 'Summer',
			months: 'June to August',
			grows: 'Tomatoes, zucchini, beans, berries',
			dish: 'Tomato salad, grilled zucchini, fresh cheese',
			current: false,
		},
		{
			name: 'Autumn',
			months: 'September to November',
			grows: 'Squash, apples, carrots, mushrooms',
			dish: 'Roast squash with sage butter',
			current: true,
		},
		{
			name: 'Winter',
			months: 'December to February',
			grows: 'Potatoes, cabbage, preserves',
			dish: 'Beef and barley stew with pickles',
			current: false,
		},
	];

	protected readonly suppliers: Supplier[] = [
		{ name: 'The home garden', gives: 'vegetables and herbs', km: '0 km' },
		{ name: 'Elm Row orchard', gives: 'apples, pears and cider', km: '3 km' },
		{ name: 'Wetherby dairy', gives: 'milk, cheese and cream', km: '7 km' },
		{ name: 'Larkin mill', gives: 'flour and oats', km: '12 km' },
	];

	protected readonly blocks: Block[] = [
		{
			title: 'The long table',
			text: 'One wooden table, twenty chairs, and dishes passed down the middle. Sit next to a stranger.',
			photo: pexels(33984955, 640, 640, 'Rustic kitchen table with tomatoes and pickled vegetables'),
		},
		{
			title: 'The pantry shelf',
			text: 'Jars, chutneys and loaves to take home. Everything on the shelf was made on the farm.',
			photo: pexels(34670989, 640, 640, 'Tomatoes, potatoes and cucumbers on a wooden shelf'),
		},
		{
			title: 'The market box',
			text: 'A weekly box of vegetables, collected from the farm gate on Saturday mornings.',
			photo: pexels(32585119, 640, 640, 'Box of artichokes and turnips in rustic light'),
		},
	];

	protected readonly visit: Fact[] = [
		{ label: 'Address', value: 'Hollin Farm, Meadow Lane' },
		{ label: 'Directions', value: 'Two miles past the church. Turn left at the red barn.' },
		{ label: 'Hours', value: 'Thursday to Sunday, 10am to 5pm' },
		{ label: 'Parking', value: 'Free, in the yard behind the house' },
	];
}
