export const DEL = 'DEL';
export const CREAT = 'CREAT';
export const PAY = 'PAY';


export const del = delet => {
	return {
		type: 'DEL',
		payload: delet
	}
};
export const creat = create => {
	return {
		type: 'CREAT',
		payload: create
	}
};
export const pay = solary => {
	return {
		type: 'PAY',
		payload: solary
	}
}