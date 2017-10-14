import fontCase from './fontCase';

describe('fontCase', () => {
    it('should return parsed value', () => {
        expect(fontCase('text').value()).toEqual('text');
    });
});
