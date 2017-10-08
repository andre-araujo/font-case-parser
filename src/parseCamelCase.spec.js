import parseCamelCase from './parseCamelCase';

describe('parseCamelCase', () => {
    it('should parse one-word cammel case string to capitalized word', () => {
        expect(parseCamelCase('text')).toEqual('Text');
    });

    it('should parse cammel case string to sentense phrase', () => {
        expect(parseCamelCase('someText')).toEqual('Some text');
    });

    it('should parse long cammel case string to spaced phrase', () => {
        expect(parseCamelCase('someLongPhraseToParse')).toEqual('Some long phrase to parse');
    });
});
