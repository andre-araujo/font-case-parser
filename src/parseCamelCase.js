export default (phrase) => {
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
