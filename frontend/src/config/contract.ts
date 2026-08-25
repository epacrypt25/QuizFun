export const SCHOOL_SYSTEM_ADDRESS = "0x2C0f3BDbBA0a672D52E9846f13c37D747c287959";

export const SCHOOL_SYSTEM_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_siswa", "type": "address" },
      { "internalType": "string", "name": "_mapel", "type": "string" },
      { "internalType": "uint256", "name": "_nilai", "type": "uint256" }
    ],
    "name": "inputNilaiUjian",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_mapel", "type": "string" }
    ],
    "name": "claimHadiahUjian",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "string", "name": "", "type": "string" }
    ],
    "name": "riwayatUjianSiswa",
    "outputs": [
      { "internalType": "uint256", "name": "nilai", "type": "uint256" },
      { "internalType": "bool", "name": "sudahClaim", "type": "bool" },
      { "internalType": "bool", "name": "terdaftar", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "uint256", "name": "_id", "type": "uint256" }
    ],
    "name": "balanceOf",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "guruAdmin",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
