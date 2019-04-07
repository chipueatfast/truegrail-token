const TrueGrailToken = artifacts.require("TrueGrailToken");
const { getRandomInt } = require("../utils");

const sampleGrail = {
    name: '',
    publishedDate: '4-4-2019',
    status: 'ds',
}

contract("TrueGrailToken", async (accounts) => {
    beforeEach(async () => {
        const trueGrailToken = await TrueGrailToken.deployed();
        await trueGrailToken.addFactory('0x11602307916Dd300919d96539e62025a5cB2579f');
    })
    

    it('should issue token with address from an factory list', async () => {

        const newTokenId = await getRandomInt();
        console.log(newTokenId);
        try {
           await trueGrailToken.issueToken(newTokenId, JSON.stringify(sampleGrail));
           const expected = '0x11602307916Dd300919d96539e62025a5cB2579f';
           assert.equal(await trueGrailToken.ownerOf(newTokenId), expected);
        } catch (e) {
            console.log(e);
        }
    })

    it('should change the ownership to the buyer', () => {})

})