const md5 = require('md5');

describe('Marvel characters', () => {
    it('Get all Marvel characters', () => {
        const date = new Date();
        const timestamp = date.getTime();
        const publicKey = '<enter your public key';
        const privateKey = '<enter your private key'
        const hash = md5(timestamp + privateKey + publicKey);

        cy.request(`/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`).then((response) => {
            expect(response.body).to.have.property('code', 200)
        })
    })
})