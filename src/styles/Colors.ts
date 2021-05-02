/**
 * Function that converts from hex color to rgb color
 * @param input the hex format of the color
 * @returns the rgb format of the color
 */
const hexToRgb = (input: string): string => {
    input = input + '';
    input = input.replace('#', '');
    const hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error('input is not a valid hex color.');
    }
    if (input.length === 3) {
        const first = input[0];
        const second = input[1];
        const last = input[2];
        input = first + first + second + second + last + last;
    }
    input = input.toUpperCase();
    const first = input[0] + input[1];
    const second = input[2] + input[3];
    const last = input[4] + input[5];
    return parseInt(first, 16) + ', ' + parseInt(second, 16) + ', ' + parseInt(last, 16);
};

const defaultFont = {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: '1.5em',
};

const whiteColor = '#FFF';
const blackColor = '#000';

const primaryColor = {
    light: '#3d6bb3',
    main: '#0d47a1',
    dark: '#093170',
    contrastText: whiteColor,
};
const secondaryColor = {
    light: '#b2102f',
    main: '#ff1744',
    dark: '#ff4569',
    contrastText: blackColor,
};
const grayColor = ['#999', '#AAAAAA', '#D2D2D2', '#e4e4e4', '#E5E5E5'];

export { hexToRgb, defaultFont, primaryColor, secondaryColor, grayColor, blackColor, whiteColor };
