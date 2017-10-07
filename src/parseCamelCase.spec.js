import parseCamelCase from './parseCamelCase';

describe('parseCamelCase', () => {
    it('should parse cammel case string to spaced phrase', () => {
        expect(parseCamelCase('someLongPhraseToParse')).toEqual('some Long Phrase To Parse');
    });
});
