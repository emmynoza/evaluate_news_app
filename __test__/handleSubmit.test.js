import { handleSubmit } from '../src/client/js/formHandler';

describe("submits form", () => {
    test('tests handleSubmit() function', () => {
        expect(handleSubmit).toBeDefined();
    })
});