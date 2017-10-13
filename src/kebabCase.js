export const toKebabCase = (phrase) => {
    const kebabCasePhrase =
        phrase
            .toLowerCase()
            .replace(/ /g, '-');

    return kebabCasePhrase;
};

export const fromKebabCase = (phrase) => {
    const spacedPhrase =
        phrase
            .replace(/-/g, ' ');

    return spacedPhrase;
};
