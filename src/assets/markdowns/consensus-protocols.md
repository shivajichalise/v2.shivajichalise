# Consensus Protocols

> Consensus protocols in the context of blockchain technology refer to the mechanisms
> through which nodes or participants in a distributed network reach an agreement on the
> validity of transactions and the current state of the ledger. These protocols ensure that
> all nodes in the network are synchronized and have a consistent view of the blockchain,
> despite the lack of a central authority. Through consensus mechanisms, blockchain networks
> establish reliability and trust among participants and in the blockchain network.

To coordinate and sustain a decentralized system, participants must collectively
agree on the accurate state of the system and the ownership of assets at any given time.
A consensus mechanism serves as the standardized method by which the nodes of the blockchain,
which are the computers responsible for running the blockchain, reliably maintain
records of all transactions and reach agreement.

Consensus protocols are required to prevent bad actors from deliberately cheating.
Here are a couple of examples of cheating:

1. **Double Spending**:

   - This occurs when a user spends the same cryptocurrency more than once.
     It is a fundamental flaw in a digital cash protocol in which the same single digital token can be spent more than once.
     For example, a malicious actor could attempt to spend their cryptocurrency on two different transactions simultaneously,
     hoping that one of the transactions gets confirmed while the other does not.
     This could result in the recipient of the cryptocurrency receiving funds that were effectively created out of thin air,
     leading to a loss of trust in the network's integrity.
   - e.g. Suppose Alice, tries to cheat by transferring 10 tokens to Bob and then trying to transfer the exact same 10 tokens to Mallory.
     The challenge is to make sure everyone can always know and agree on who owns which tokens.
     With that agreement, or consensus, Chris would already know that Anthony no longer owns the tokens he is proposing to send.

2. **Sybil Attack**:

   - A Sybil attack is a type of attack in which a malicious actor creates multiple fake identities or nodes in a network
     to gain control or influence over the network.
   - In a this attack, the attacker exploits the lack of a central authority or trust mechanism by creating numerous
     fake identities that appear to be distinct and independent entities. These fake identities may have fabricated
     credentials or information to make them appear legitimate.
   - Look up _**Shirley Ardell Mason**_ to learn about the background of Sybil.

### Types of consensus protocols

#### What is a proof?

> In blockchain technology, proof refers to a string that,
> when hashed with the previous block's proof and block data,
> produces a hash that meets specific predefined criteria.
> This string, known as a nonce, is the result of mining,
> which is the process of finding a valid nonce.
> Therefore, it is often referred to as the "Proof of Work Value."

1. **PoW**:

- PoW stands for Proof of Work.
- A proof of work algorithm is how new blocks are created or mined on the blockchain.
- PoW involves finding a specific value called a "nonce" that, when combined with other block data, generates a hash value that meets certain criteria.
- Miners compete to find this nonce, and the first one to succeed gets to add a new block to the blockchain and is rewarded for the work done.
- This "nonce" (number used once) must be **_difficult to find but easy to verify_**.

Let's understand this with an example:

> Imagine we have a puzzle where we want to find a number 'n' such that when we compute the hash of 'n' combined with a secret key 'k',
> the resulting hash should start with '1234'. So, we are looking for 'n' that satisfies hash(n + k) = 1234abc...

<code language="javascript">
// Given secret key
let k = "secret_key";

// Desired pattern at the beginning of the hash
let desired_pattern = "1234";

// Initialize the nonce
let nonce = 0;

let data;
let result_hash;

while (true) {
// Combine the nonce and secret key
data = nonce + k;

    // Calculate the hash
    result_hash = sha256.hex(data);

    // Check if the hash starts with the desired pattern
    if (result_hash.startsWith(desired_pattern)) {
        console.log("Found n: ", nonce);
        console.log("Hash: ", result_hash);
        break;
    }

    nonce += 1;

}
</code>

You can find a simple example of Proof of Work <a href="https://github.com/shivajichalise/pow">here</a>.

2. **PoS**

- PoS stands for Proof of Stake.
- In PoS, validators are chosen to create new blocks and validate transactions based on
  the amount of cryptocurrency they hold and are willing to "stake" or lock up as collateral.
- The probability of a validator being chosen to create a new block is directly proportional to the size of their stake.
  Validators with larger stakes have a higher chance of being selected.
- PoS reduces the amount of computational work needed to verify blocks and transactions.
- To become a validator, a coin owner must "stake" a specific amount of coins.
- Ethereum requires 32 ETH to be staked before a user can operate a node.
- Blocks are validated by multiple validators, and when a specific number of
  validators verify that the block is accurate, it is finalized and closed.
- PoS is designed to reduce network congestion and address environmental sustainability concerns surrounding the proof-of-work (PoW) protocol.
- PoS is a competitive approach to verifying transactions, which naturally encourages people to look for ways to gain an advantage,
  especially since monetary value is involved.

### Differences between PoS and PoW:

| Proof of Stake                                              | Proof of Work                                                |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| Block creators are called validators                        | Block creators are called miners                             |
| Participants must own coins or tokens to become a validator | Participants must buy equipment and energy to become a miner |
| Energy efficient                                            | Not energy efficient                                         |
| Security through community control                          | Robust security due to expensive upfront requirement         |
| Validators receive transactions fees as rewards             | Miners receive block rewards                                 |
