import {
    toSnakeCase,
    fromSnakeCase,
} from './snakeCase';

describe('toSnakeCase', () => {
    it('should parse spaced text to snake case', () => {
        expect(toSnakeCase('some text')).toEqual('some_text');
    });

    it('should parse spaced long text to snake case', () => {
        expect(toSnakeCase('Some long phrase to parse')).toEqual('some_long_phrase_to_parse');
    });
});

describe('fromSnakeCase', () => {
    it('should parse one-word snake case string to capitalized word', () => {
        expect(fromSnakeCase('text')).toEqual('text');
    });

    it('should parse snake case string to sentense phrase', () => {
        expect(fromSnakeCase('some_text')).toEqual('some text');
    });

    it('should parse long snake case string to spaced phrase', () => {
        expect(fromSnakeCase('some_long_phrase_to_parse')).toEqual('some long phrase to parse');
    });
});
