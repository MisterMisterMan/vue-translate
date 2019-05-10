'use strict';

const ALPHABET = [
    ['А', 'а', 'A', 'a', '/a/'],
    ['Б', 'б', 'B', 'b', '/b/'],
    ['В', 'в', 'V', 'v', '/ʋ/'],
    ['Г', 'г', 'G', 'g', '/g/'],
    ['Д', 'д', 'D', 'd', '/d/'],
    ['Ђ', 'ђ', 'Đ', 'đ', '/dʑ/'],
    ['Е', 'е', 'E', 'e', '/ɛ/'],
    ['Ж', 'ж', 'Ž', 'ž', '/ʒ/'],
    ['З', 'з', 'Z', 'z', '/z/'],
    ['И', 'и', 'I', 'i', '/i/ '],
    ['Ј', 'ј', 'J', 'j', '/j/'],
    ['К', 'к', 'K', 'k', '/k/'],
    ['Л', 'л', 'L', 'l', '/l/'],
    ['Љ', 'љ', 'Lj', 'lj', '/ʎ/'],
    ['М', 'м', 'M', 'm', '/m/'],
    ['Н', 'н', 'N', 'n', '/n/'],
    ['Њ', 'њ', 'Nj', 'nj', '/ɲ/'],
    ['О', 'о', 'O', 'o', '/ɔ/'],
    ['П', 'п', 'P', 'p', '/p/'],
    ['Р', 'р', 'R', 'r', '/r/ '],
    ['С', 'с', 'S', 's', '/s/ '],
    ['Т', 'т', 'T', 't', '/t/'],
    ['Ћ', 'ћ', 'Ć', 'ć', '/tɕ/'],
    ['У', 'у', 'U', 'u', '/u/ '],
    ['Ф', 'ф', 'F', 'f', '/f/'],
    ['Х', 'х', 'H', 'h', '/x/'],
    ['Ц', 'ц', 'C', 'c', '/ts/'],
    ['Ч', 'ч', 'Č', 'č', '/tʃ/'],
    ['Џ', 'џ', 'Dž', 'dž', '/dʒ/'],
    ['Ш', 'ш', 'Š', 'š', '/ʃ/ ']
];

function convert(word, toLatin = true) {
    return word.split('').map(letter => {
        const index = toLatin ? 0 : 2;
        const shift = toLatin ? 2 : -2;
        for (let letters of ALPHABET) {
            if (letters[index] === letter) return letters[index + shift];
            if (letters[index + 1] === letter) return letters[index + 1 + shift];
        }
        return letter;
    }).join('')
}

export default {

    toLatin(word) {
        return convert(word, true)
    },

    toCyrillic(word) {
        return convert(word, false)
    },

    ALPHABET
}
