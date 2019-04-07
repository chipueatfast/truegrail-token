const TrueGrailToken =  artifacts.require('TrueGrailToken');

module.exports = (deployer) => {
    deployer.deploy(TrueGrailToken, "TrueGrailToken", "☘");
}