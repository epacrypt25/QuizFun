// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "forge-std/Script.sol";
import "../src/ERC1155TokenBadge.sol";

contract DeploySchoolSystem is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        SchoolSystem schoolSystem = new SchoolSystem();

        console.log("SchoolSystem (ERC1155 + ERC20) deployed to:", address(schoolSystem));
        console.log("Teacher Admin (Deployer):", schoolSystem.teacherAdmin());

        vm.stopBroadcast();
    }
}
