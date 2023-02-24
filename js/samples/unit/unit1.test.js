import { sayHello } from "./unit1";

describe('SayHello Unit Test Suite', () => {

    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe('Hello, World')
    })

    it('should return "Hello, Thomas"', () => {
        expect(sayHello("Thomas")).toBe("Hello, Thomas")
    })

})