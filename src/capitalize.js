export const capitalize = (phrase) => {
    const capitalizedLetter = phrase
        .charAt(0)
        .toUpperCase();

    return capitalizedLetter + phrase.substring(1);
};
