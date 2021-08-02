import { validateURL } from '../src/client/js/urlChecker'

describe("testing UI rendering", () => {
    test('Testing importURL()function', () => {
        expect(validateURL).toBeDefined();
    })
});