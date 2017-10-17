import {
    isKebabCase,
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
