const { randomBytes } = require("crypto");
const util = require('util');  

async function getRandomInt() {
    const randomBytesAsync = util.promisify(randomBytes);
    return randomBytesAsync(256).then(
        (buf, err) => {
            if (err) {
                return null;
            }
            return buf.readUIntBE(0, 6);
        }
    );
}

module.exports = {
    getRandomInt,
}