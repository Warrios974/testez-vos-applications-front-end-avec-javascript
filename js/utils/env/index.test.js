import { isInTestEnv } from "./index";

describe('Call function isInTestEnv', () => {
    it('should be in test env', () => {
        expect(isInTestEnv()).toBe(true)
    })
    it('should not to be in test env', () => {
        process.env.NODE_ENV = 'dev'
        expect(isInTestEnv()).toBe(false)
    })
})