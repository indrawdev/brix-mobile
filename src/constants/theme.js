import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS  = {
	black: "#1E1F20",
	white: "#FFFFFF",
	lightGray: "#ABAFB8",
	gray: "#BEC1D2",
}

export const SIZES = {
	// globals
	base: 8,
	font: 14,
	radius: 12,
	padding: 24,

	// fontSizes
	navTitle: 25,
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 14,
	h5: 12,
	body1: 30,
	body2: 20,
	body3: 16,
	body4: 14,
	body5: 12,

	// dimension
	width,
	height
}

export default { COLORS, SIZES }