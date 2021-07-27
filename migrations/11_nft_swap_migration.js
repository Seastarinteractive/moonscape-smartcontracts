var NftSwap = artifacts.require("./NftSwap.sol");
var Crowns = artifacts.require("./CrownsToken.sol");
var Nft = artifacts.require("./SeascapeNft.sol");




const _feeRate = 1000;	// fee = _feeRate * 1000
                        // e.g. if _feeRate is set to 1000 than fee will be 1 CWS

module.exports = function(deployer, network) {
    if (network == "ganache") {
          await deployer.deploy(Nft);
        console.log("To mint Nft it is using NFT Factory at address: "+Nft.address);
          await deployer.deploy(Crowns);
        console.log("It is used with Crowns (CWS) Token at address: "+Crowns.address);
          await deployer.deploy(NftSwap, _feeRate, Crowns.address, Nft.address);
        console.log("NftSwap contract was deployed at address: "+NftSwap.address);

    } else if (network == "rinkeby") {
        var crowns = "0x168840Df293413A930d3D40baB6e1Cd8F406719D";
        var nft = "0x7115ABcCa5f0702E177f172C1c14b3F686d6A63a";

        await deployer.deploy(NftSwap, crowns, nft);
          console.log("NftSwap contract was deployed at address: "+NftSwap.address);
    } else if (network == "bsctestnet") {
        var crowns = "0x4Ca0ACab9f6B9C084d216F40963c070Eef95033B";
        var nft = "0x66638F4970C2ae63773946906922c07a583b6069";

        await deployer.deploy(NftSwap, crowns, nft);
          console.log("NftSwap contract was deployed at address: "+NftSwap.address);
      } else if (network == "moonbase") {
        var crowns = "0x7F8F2A4Ae259B3655539a58636f35DAD0A1D9989";
        var nft = "0xBD29CE50f23e9dcFCfc7c85e3BC0231ab68cbC37";

        await deployer.deploy(NftSwap, crowns, nft);
          console.log("NftSwap contract was deployed at address: "+NftSwap.address);
      } else if (network == "mainnet") {
        var crowns = "0xac0104cca91d167873b8601d2e71eb3d4d8c33e0";
        var nft = "0x828e2cb8d03b52d408895e0844a6268c4c7ef3ad";

        await deployer.deploy(NftSwap, crowns, nft);
          console.log("NftSwap contract was deployed at address: "+NftSwap.address);
      } else if (network == "bsc") {
        var crowns = "0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd";
        var nft = "0xc54b96b04AA8828b63Cf250408E1084E9F6Ac6c8";

        await deployer.deploy(NftSwap, crowns, nft);
          console.log("NftSwap contract was deployed at address: "+NftSwap.address);
      }
};