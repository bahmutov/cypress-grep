/// <reference types="cypress" />

const parameterized = 'parameterized'

describe('should run these tests', () => {
    it(`${parameterized} title`, { tags: '@smoke' }, () => {
    })

    it('seperated' + ' title', { tags: '@smoke' }, () => {
    })
});