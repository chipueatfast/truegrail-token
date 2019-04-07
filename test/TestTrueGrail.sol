pragma solidity >=0.4.25 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TrueGrailToken.sol";

contract TestTrueGrail {
    function testInitTrueGrailUsingDeployedContract() public {
        TrueGrailToken trueGrail = TrueGrailToken(DeployedAddresses.TrueGrailToken());

        string memory expected = "TrueGrailToken";
        Assert.equal(trueGrail.name(), expected, "The token should have no different name");
    }

    function testInitNewTrueGrail() public {
        TrueGrailToken trueGrail = new TrueGrailToken("TrueGrailToken", "☘");
        string memory expected = "☘";
        Assert.equal(trueGrail.symbol(), expected, "The token should have no different symbol");
    }

   
}