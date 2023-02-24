import { retrieveSensorsData } from "./sensorsApi";
import { data } from '../../../data/mock-homepage-data.js'

describe('call function retrieveSensorsData to check data', () => {
    it('should receive mocked datas', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})