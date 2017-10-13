export const toSnakeCase = (phrase) => {
    const camelCasePhrase =
        phrase
            .toLowerCase()
            .replace(/ /g, '_');

    return camelCasePhrase;
};

export const fromSnakeCase = (phrase) => {
    const spacedPhrase =
        phrase
            .replace(/_/g, ' ');

    return spacedPhrase;
};
