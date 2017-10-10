export const toCamelCase = (phrase) => {
    const camelCasePhrase =
        phrase
            .toLowerCase()
            .replace(/ [a-zA-Z]/g, letter => letter.trim().toUpperCase());

    return camelCasePhrase;
};

export const fromCamelCase = (phrase) => {
    const lowerCasePhrase =
        phrase
            .replace(/[A-Z]/g, letter => ` ${letter}`)
            .toLowerCase();

    const capitalizedLetter =
        lowerCasePhrase
            .charAt(0)
            .toUpperCase();

    const sentenceCasePhrase = capitalizedLetter + lowerCasePhrase.substring(1);

    return sentenceCasePhrase;
};

