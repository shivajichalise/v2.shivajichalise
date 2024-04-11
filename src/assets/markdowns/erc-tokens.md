# ERC Tokens

> An Ethereum Request for Comments (ERC) is a standard, a document that programmers use to
> write smart contracts on Ethereum Blockchain.
> They describe rules in these documents that Ethereum-based tokens must comply with.

There are many Ethereum standards. Below 2 are the most well-known and popular:

- **ERC-20**
- **ERC-721**

Before we dive into these, let's first understand what exactly a token is.

### Token

> A token refers to a digital asset or unit of value that is created and managed on a blockchain platform.
> Tokens can represent various types of assets, rights, or utilities.

In ethereum, tokens can represent virtually anything.
Reputation points in an online platform,
skills of a character in a game,
financial assets like a share in a company
a fiat currency like USD,
an ounce of gold,
and more.

1. **ERC-20**:

- The ERC-20 introduces a standard for Fungible Tokens, in other words,
  they have a property that makes each Token be exactly the same (in type and value) as another Token.
  For example, an ERC-20 Token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.
  (e.g. 1 NPR coin will always be equal to any other 1 NPR coin)

- ERC-20 provides below functionalities:

  1. Transfer tokens from one account to another.
  2. Get the current token balance of an account.
  3. Approve whether an amount of token from an account is spendable by a third-party account.
  4. Get the total supply of the token available on the network.

If a Smart Contract implements the following methods and events it can be called an ERC-20 Token Contract and,
once deployed, it will be responsible to keep track of the created tokens on Ethereum.

#### Methods:

<code language="sol">
function name() public view returns (string)
function symbol() public view returns (string)
function decimals() public view returns (uint8)
function totalSupply() public view returns (uint256)
function balanceOf(address _owner) public view returns (uint256 balance)
function transfer(address _to, uint256 _value) public returns (bool success)
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
function approve(address _spender, uint256 _value) public returns (bool success)
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
</code>

#### Events:

<code language="sol">
event Transfer(address indexed _from, address indexed _to, uint256 _value)
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
</code>

Let's understand the purpose of each of the methods.

1. name()

- It returns the name of the token.

2. symbol()

- It returns the symbol of the token.

3. decimals()

- It returns the number of decimals the token uses.
- e.g. If **8** is returned then the token amount is to be divided by **100000000** to get the user representation.

4. totalSupply()

- It returns the total supply of the tokens.

5. balanceOf(address \_owner)

- It returns of account balance of an account with address \_owner

6. transfer(address \_to, uint256 \_value)

- It transfers \_value to an account with address \_to
- It **MUST** emit **Transfer** event.
- The function **SHOULD** throw if the message caller’s account balance does not have enough tokens to spend.

7. transferFrom(address \_from, address \_to, uint256 \_value)

- It transfers \_value from account with address \_from to the address \_to.
- It **MUST** emit **Transfer** event.
- This method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf.
- The function **SHOULD** throw unless the \_from account has deliberately authorized the sender of the message via some mechanism.

8. approve(address \_spender, uint256 \_value)

- Allows \_spender to withdraw from your account multiple times, up to the \_value amount.
- If this function is called again it overwrites the current allowance with \_value.

9. allowance(address \_owner, address \_spender)

- It returns the amount which \_spender is still allowed to withdraw from \_owner.

Let's understand the purpose of each of the events.

1. Transfer

- This event **MUST** trigger when tokens are transferred, including zero value transfers.
- A token contract which creates new tokens **SHOULD** trigger a Transfer event with the
  \_from address set to 0x0 when tokens are created.

2. Approval

- This event **MUST** trigger on any successful call to approve(address \_spender, uint256 \_value).

There are already many implementations of ERC-20 compliant tokens in Ethereum network.
Different implementation by different teams comes with different trade-offs; including gas saving to improved security.

Please refer to [this](https://eips.ethereum.org/EIPS/eip-20) for more detailed explanation.
