// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "forge-std/Script.sol";
import "../src/EduFun.sol";

contract DeployEduFun is Script {
    function run() external {
        // Mengambil PRIVATE_KEY dari file .env
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        // Deploy kontrak EduFun
        EduFun edufun = new EduFun();

        // Print alamat kontrak yang berhasil di-deploy
        console.log("EduFun deployed to:", address(edufun));
        console.log("RWA Token deployed to:", address(edufun.rwaToken()));
        console.log("USDT Token deployed to:", address(edufun.usdtToken()));

        vm.stopBroadcast();
    }
}
