import {
    isKebabCase,
    isSnakeCase,
} from './caseChecker';

describe('isKebabCase', () => {
    it('should be falsy if there is no -', () => {
        expect(isKebabCase('text')).toBeFalsy();
    });

    it('should be falsy if ends with -', () => {
        expect(isKebabCase('text-')).toBeFalsy();
    });

    it('should be falsy if starts with -', () => {
        expect(isKebabCase('-text')).toBeFalsy();
    });

    it('should be falsy if ends and starts with -', () => {
        expect(isKebabCase('-text-')).toBeFalsy();
    });

    it('should be falsy if there a space between letters', () => {
        expect(isKebabCase('text-ww w-w-www')).toBeFalsy();
    });

    it('should be truthy if there is - between letters', () => {
        expect(isKebabCase('text-www-w-www')).toBeTruthy();
    });
});


describe('isSnakeCase', () => {
    it('should be falsy if there is no _', () => {
        expect(isSnakeCase('text')).toBeFalsy();
    });

    it('should be falsy if ends with _', () => {
        expect(isSnakeCase('text_')).toBeFalsy();
    });

    it('should be falsy if starts with _', () => {
        expect(isSnakeCase('_text')).toBeFalsy();
    });

    it('should be falsy if ends and starts with _', () => {
        expect(isSnakeCase('_text_')).toBeFalsy();
    });

    it('should be falsy if there a space between letters', () => {
        expect(isSnakeCase('text_ww w_w_www')).toBeFalsy();
    });

    it('should be truthy if there is _ between letters', () => {
        expect(isSnakeCase('text_www_w_www')).toBeTruthy();
    });
});

