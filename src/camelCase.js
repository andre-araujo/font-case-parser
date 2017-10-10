export const toCamelCase = (phrase) => {
    const camelCasePhrase =
        phrase
            .toLowerCase()
            .replace(/ [a-zA-Z]/g, letter => letter.trim().toUpperCase());

    return camelCasePhrase;
};

export const fromCamelCase = (phrase) => {
    const spacedPhrase =
        phrase
            .replace(/[A-Z]/g, letter => ` ${letter}`)
            .toLowerCase();

    return spacedPhrase;
};
