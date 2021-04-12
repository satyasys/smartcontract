const MetaCoin = artifacts.require("MetaCoin");

module.exports = function (deployer) {
    deployer.deploy(ConverterLib);
    deployer.link(ConverterLib, MetaCoin);
    deployer.deploy(MetaCoin);
};
