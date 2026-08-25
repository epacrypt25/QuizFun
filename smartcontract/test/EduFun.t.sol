// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "forge-std/Test.sol";
import "../src/EduFun.sol";
import "../src/ERC20/ERC20Token.sol";

contract EduFunTest is Test {
    EduFun public edufun;
    address public owner;
    address public student1;
    address public student2;

    function setUp() public {
        owner = address(this);
        student1 = vm.addr(1);
        student2 = vm.addr(2);

        edufun = new EduFun();
    }

    function testDeployment() public view {
        assertEq(edufun.owner(), owner);
        assertTrue(address(edufun.rwaToken()) != address(0));
        assertTrue(address(edufun.usdtToken()) != address(0));
    }

    function testRegisterStudent() public {
        vm.prank(student1);
        edufun.registerStudent("Budi", "1234567890123456", "budi@email.com");

        (string memory name, string memory nik, string memory email, bool isRegistered) = edufun.students(student1);

        assertTrue(isRegistered);
        assertEq(name, "Budi");
        assertEq(nik, "1234567890123456");
        assertEq(email, "budi@email.com");
    }

    function testRevertRegisterInvalidNik() public {
        vm.prank(student1);
        vm.expectRevert("NIK must be exactly 16 digits");
        edufun.registerStudent("Budi", "123", "budi@email.com");
    }

    function testSubmitQuizScoreRWA() public {
        vm.prank(student1);
        edufun.registerStudent("Budi", "1234567890123456", "budi@email.com");

        edufun.submitQuizScore(student1, 85, 1);

        ERC20Token rwa = edufun.rwaToken();
        assertEq(rwa.balanceOf(student1), 10 * 10 ** 18);
    }

    function testRevertSubmitQuizScoreRWABelow80() public {
        vm.prank(student1);
        edufun.registerStudent("Budi", "1234567890123456", "budi@email.com");

        vm.expectRevert("Quiz score must be strictly over 80 to get RWA");
        edufun.submitQuizScore(student1, 80, 1);
    }

    function testSubmitQuizScoreUSDT() public {
        vm.prank(student1);
        edufun.registerStudent("Budi", "1234567890123456", "budi@email.com");

        edufun.submitQuizScore(student1, 60, 2);

        ERC20Token usdt = edufun.usdtToken();
        assertEq(usdt.balanceOf(student1), 5 * 10 ** 18);
    }

    function testRevertSubmitQuizScoreNotOwner() public {
        vm.prank(student1);
        edufun.registerStudent("Budi", "1234567890123456", "budi@email.com");

        vm.prank(student2);
        vm.expectRevert("Only owner");
        edufun.submitQuizScore(student1, 90, 1);
    }

    function testRevertSubmitQuizScoreNotRegistered() public {
        vm.expectRevert("Student is not registered (No role yet)");
        edufun.submitQuizScore(student2, 90, 1);
    }
}
