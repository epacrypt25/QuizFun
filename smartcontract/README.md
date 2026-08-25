# QuizFun (EduFun) Smart Contracts

This repository contains the smart contracts for the EduFun Educational Platform, built using Foundry.

## Smart Contracts Overview

The system consists of two primary contract ecosystems:

### 1. `SchoolSystem` (`ERC1155TokenBadge.sol`)
**Purpose:** Handles student exam scores, the school's native ERC20 token (`School Token`), and issues ERC1155 NFT Badges when students pass their exams.
**Core Roles:**
- `teacherAdmin` (Deployer): Has the authority to input and validate student grades.
- `Student` (Any user): Takes exams and can claim token/NFT rewards based on their inputted grades.

**Key Functions & Their Purpose:**
- `inputExamScore(address _student, string memory _subject, uint256 _score)`
  - **Purpose:** Used strictly by the `teacherAdmin` to securely record a student's final score for a specific subject into the blockchain (acting as a permanent database).
- `claimExamReward(string memory _subject)`
  - **Purpose:** Called by the `Student` after the teacher inputs a score. If the recorded score is `>= 80`, it mints exactly `100` ERC20 School Tokens and `1` ERC1155 Badge (e.g. Math or Science NFT) directly to the student's wallet.
- `balanceOf(address _owner, uint256 _id)`
  - **Purpose:** Read-only function to check how many NFT Badges a specific student holds.

### 2. `EduFun` (`EduFun.sol`)
**Purpose:** Serves as the main educational platform for quizzes, dealing with general student registration and dynamically distributing Real World Asset (`RWA`) or `USDT` mock tokens.
**Core Roles:**
- `owner` (Deployer/Admin): The system administrator who processes quiz results and distributes the prize pool.
- `Student`: Any user who registers to participate in quizzes.

**Key Functions & Their Purpose:**
- `registerStudent(string _name, string _nik, string _email)`
  - **Purpose:** Allows any wallet to sign up as a student. It records their Name, Email, and validates their 16-digit NIK (National ID) on the blockchain. This grants them the "Registered" role.
- `submitQuizScore(address student, uint256 score, uint8 quizType)`
  - **Purpose:** Only accessible by the `owner`. It takes the quiz result from the backend (Web2) and executes the reward logic on Web3. If it's `quizType 1` (Educational Quiz) and score is `> 80`, it mints `10 RWA tokens`. If it's `quizType 2` (General Task), it mints `5 USDT tokens`.

---

## How to Test and Run on Remix IDE

To fully understand the interaction between roles and badges, you can simulate it in [Remix IDE](https://remix.ethereum.org/):

### Preparation
1. Create new files in your Remix workspace matching your local file structure and copy the smart contract codes (or use a flattened version).
2. Open the **Solidity Compiler** tab, set the compiler version to `^0.8.26`, and click **Compile**.
3. Open the **Deploy & Run Transactions** tab.
   - Under **Environment**, choose **Remix VM (Cancun)**. You'll get multiple test wallets with 100 ETH each.
   - Designate the first address (**Wallet A**) as the **Admin/Teacher**.
   - Designate the second address (**Wallet B**) as the **Student**.

---

### Simulation 1: `SchoolSystem` (Badges & Teacher Role)

#### Step 1: Deployment (Role: Admin)
- Select **Wallet A** from the Account dropdown.
- Select the `SchoolSystem` contract and click **Deploy**.
- *Result:* Wallet A is permanently assigned as the `teacherAdmin`.

#### Step 2: Input Exam Score (Role: Admin)
- Make sure **Wallet A** is still selected.
- Expand the deployed `SchoolSystem` contract.
- Call `inputExamScore` with these parameters:
  - `_student`: (Copy & Paste Wallet B's address)
  - `_subject`: `"Math"`
  - `_score`: `85`
- Click **transact**.
- *Result:* The teacher has successfully logged an 85 for the student's Math exam.

#### Step 3: Claim Reward & Badge (Role: Student)
- Switch the Account dropdown to **Wallet B (Student)**.
- Call `claimExamReward` with this parameter:
  - `_subject`: `"Math"`
- Click **transact**.
- *Result:* Because Wallet B is a student with a score > 80, the transaction succeeds. They receive 100 ERC20 tokens and 1 ERC1155 Math Badge. If they try clicking it again, it will revert to prevent double-claiming.

#### Step 4: Verify the NFT Badge
- Call `balanceOf` to prove the badge was received:
  - `_owner`: (Paste Wallet B's address)
  - `_id`: `1` (The constant ID for `BADGE_MATH`)
- Click **call**. The output should be `1`, meaning the student owns the badge!

---

### Simulation 2: `EduFun` (Quiz & Registration)

#### Step 1: Deployment (Role: Admin)
- Switch the Account dropdown back to **Wallet A**.
- Select the `EduFun` contract and click **Deploy**.
- *Result:* Wallet A is the `owner`. The `RWA` and `USDT` tokens are auto-deployed in the background.

#### Step 2: Student Registration (Role: Student)
- Switch to **Wallet B (Student)**.
- Call `registerStudent` with these parameters:
  - `_name`: `"John Doe"`
  - `_nik`: `"1234567890123456"` (Must be strictly 16 characters)
  - `_email`: `"john@example.com"`
- Click **transact**.
- *Result:* The student profile is saved on-chain, unlocking their access to rewards.

#### Step 3: Submit Quiz Score (Role: Admin)
- **CRITICAL:** Switch the Account dropdown back to **Wallet A (Admin)**. If you use Wallet B, it will fail with "Only owner".
- Call `submitQuizScore` with these parameters:
  - `student`: (Paste Wallet B's address)
  - `score`: `90`
  - `quizType`: `1`
- Click **transact**.
- *Result:* The admin validates the score, and the student's wallet is credited with 10 RWA tokens. You can copy the `rwaToken` address from the EduFun contract and check Wallet B's balance manually to verify.

---

## Foundry Setup (Local CLI)

If you prefer testing via command line:

```shell
# Compile contracts
$ forge build

# Run tests
$ forge test

# Format code
$ forge fmt
```
