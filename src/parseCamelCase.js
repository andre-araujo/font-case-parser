export default (phrase) => {
    const parsedPhrase = phrase.replace(/[A-Z]/g, letter => ` ${letter}`);

    return parsedPhrase;
};
