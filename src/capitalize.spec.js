import {
    capitalize,
} from './capitalize';

describe('capitalize', () => {
    it('should capitalize word', () => {
        expect(capitalize('text')).toEqual('Text');
    });

    it('should capitalize a phrase', () => {
        expect(capitalize('some long phrase')).toEqual('Some long phrase');
    });

    it('should capitalize the first word only', () => {
        expect(capitalize('some lONg Phrase')).toEqual('Some lONg Phrase');
    });
});
