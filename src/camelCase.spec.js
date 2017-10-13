import {
    toCamelCase,
    fromCamelCase,
} from './camelCase';

describe('toCamelCase', () => {
    it('should parse spaced text to camel case', () => {
        expect(toCamelCase('some text')).toEqual('someText');
    });

    it('should parse spaced long text to camel case', () => {
        expect(toCamelCase('Some long phrase to parse')).toEqual('someLongPhraseToParse');
    });
});

describe('fromCamelCase', () => {
    it('should parse one-word cammel case string to capitalized word', () => {
        expect(fromCamelCase('text')).toEqual('text');
    });

    it('should parse cammel case string to sentense phrase', () => {
        expect(fromCamelCase('someText')).toEqual('some text');
    });

    it('should parse long cammel case string to spaced phrase', () => {
        expect(fromCamelCase('someLongPhraseToParse')).toEqual('some long phrase to parse');
    });
});
