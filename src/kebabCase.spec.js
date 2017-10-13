import {
    toKebabCase,
    fromKebabCase,
} from './kebabCase';

describe('toKebabCase', () => {
    it('should parse spaced text to kebab case', () => {
        expect(toKebabCase('some text')).toEqual('some-text');
    });

    it('should parse spaced long text to kebab case', () => {
        expect(toKebabCase('Some long phrase to parse')).toEqual('some-long-phrase-to-parse');
    });
});

describe('fromKebabCase', () => {
    it('should parse one-word kebab case string to capitalized word', () => {
        expect(fromKebabCase('text')).toEqual('text');
    });

    it('should parse kebab case string to sentense phrase', () => {
        expect(fromKebabCase('some-text')).toEqual('some text');
    });

    it('should parse long kebab case string to spaced phrase', () => {
        expect(fromKebabCase('some-long-phrase-to-parse')).toEqual('some long phrase to parse');
    });
});
