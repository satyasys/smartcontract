const bVault = artifacts.require("bVault");

module.exports = function (deployer) {
  deployer.deploy(bVault);
};
