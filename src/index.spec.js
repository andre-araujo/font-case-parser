import fontCase from './index';

describe('fontCase', () => {
    it('should return parsed value', () => {
        expect(fontCase('text').value()).toEqual('text');
    });
});
