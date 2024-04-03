# Blockchain:

> Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.
> It is an immutable, sequential chain of records called Blocks. They can contain transactions, files or any data you like, really. But the important thing is that they’re chained together using hashes.

#### Why blockchain and why it matters?

- A blockchain is a highly secure, reliable, and decentralized network that allows people to record transaction activity, store data, and exchange value in a distributed ledger that is not controlled by any central authority, but instead maintained by computers all around the world.
- The nature of blockchain allows for trustless systems to be built on top of it. Users don’t rely on a centralized group of people, such as a bank, to make decisions and allow transactions to flow through. Because the system is decentralized, users know that transactions will never be denied for non-custodial reasons.
- The basic few reasons why blockchain matters are:
  1. Decentralization
  2. Transparency
  3. Security and Immutability
  4. Smart contracts (self-executing contracts with the terms directly written into code, this automation reduces the need for intermediaries, streamlining processes and reducing costs)

#### Blockchain structure:

- Consists of blocks.
- Block consists of index, timestamp, transactions, previous_block_hash, hash and proof.
  1. **index**: An unique identifier of the block, It represents the position of the block within the blockchain.
  2. **timestamp**: Is a record of the exact time when the block was added to the blockchain
  3. **transactions**: A list of all the transactions that are included in the block.
  4. **previous_block_hash**: The cryptographic hash of the previous block in the blockchain.
  5. **hash**: It is a cryptographic hash of the entire block's (itself) data.
  6. **proof**: The "proof" or "proof of work value" or "nonce" is a value that miners calculate during the mining process. It represents the computational work performed to create the block and is essential for reaching consensus in a blockchain network.
- A block can look like:

<code language="python">
block = {
    'index': 1,
    'timestamp': 1506057125.900785,
    'transactions': [
        {
            'amount': 5,
            'recipient': "a77f5cdfa2934df3954a5c7c7da5df1f",
            'sender': "8527147fe1f5426f9dd545de4b27ee00"
        }
    ],
    'previous_block_hash': "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
    'hash': "ac5b9e29e1b161e5c1fa7425e73043362938b98242cf24dba5fb0a30e26e83b2"
    'proof': 324984774000,
}
</code>

<code language="python">
       Genesis                          Block 1                         Block 2                         Block n                         Block n+1
+---------------------+         +---------------------+         +---------------------+         +---------------------+         +---------------------+
|    Previous hash    |      +->|    Previous hash    |      +->|    Previous hash    |      +->|    Previous hash    |      +->|    Previous hash    |
+---------------------+      |  +---------------------+      |  +---------------------+      |  +---------------------+      |  +---------------------+
|  index: int         |      |  |  index: int         |      |  |  index: int         |      |  |  index: int         |      |  |  index: int         |
|                     |      |  |                     |      |  |                     |      |  |                     |      |  |                     |
|  timestamp: time()  |      |  |  timestamp: time()  |      |  |  timestamp: time()  |      |  |  timestamp: time()  |      |  |  timestamp: time()  |
|                     +------+  |                     +------+  |                     +------+  |                     +------+  |                     |
|  hash: SHA256       |         |  hash: SHA256       |         |  hash: SHA256       |         |  hash: SHA256       |         |  hash: SHA256       |
|                     |         |                     |         |                     |         |                     |         |                     |
|  transactions: []   |         |  transactions: []   |         |  transactions: []   |         |  transactions: []   |         |  transactions: []   |
+---------------------+         +---------------------+         +---------------------+         +---------------------+         +---------------------+
|       Proof         |         |       Proof         |         |       Proof         |         |       Proof         |         |       Proof         |
+---------------------+         +---------------------+         +---------------------+         +---------------------+         +---------------------+
</code>

#### Basic Blockchain Operations

1. **Transaction Initialization:**

   - Peer participants initiate the transfer of information or assets by creating a transaction.

2. **Transaction Validation:**

   - Nodes on the network verify the validity of transactions, ensuring they meet predefined rules. This includes checking the authenticity and correctness of incoming transactions.

3. **Transaction Broadcasting:**

   - Valid transactions are broadcasted to all nodes on the network, ensuring that the information is distributed across the decentralized network.

4. **Block Creation:**

   - Valid transactions are grouped into blocks by network nodes. These blocks serve as containers for transactions and contribute to the efficiency and security of the blockchain.

5. **Meeting Consensus:**

   - Nodes collectively agree on the next block to be added to the blockchain. Various consensus mechanisms, such as proof-of-work or proof-of-stake, can be employed to achieve agreement among nodes.

6. **Block Addition:**

   - The newly agreed-upon block is added to the existing blockchain in a sequential and irreversible manner. This process ensures the integrity and immutability of the blockchain.

7. **Chaining Blocks:**

   - Each block contains a reference to the previous block, creating an immutable chain. This linkage ensures the chronological order and integrity of the entire blockchain.

8. **Consistency Across Nodes:**
   - All nodes maintain a consistent and identical copy of the blockchain. Consistency is a crucial aspect of the decentralized nature of the blockchain, ensuring that all participants have the same view of the ledger.

#### Decentralization

- Decentralization is a fundamental principle that aims to distribute control and decision-making across a network of nodes rathen than concentrating it in a single authority. The goal is to create a trustless and resilient system where no single entity has influence or control.
- Decentralized networks enhances security and transparency and it aims to reduce the level of trust that participants must place in one another, and deter their ability to exert authority or control over one another in ways that degrade the functionality of the network.
- Decentralization is a key principle underlying the design and functionality of the blockchain systems.

The key aspects of decentralization in blockchain systems are:

1. **Distributed network**

   - Blockchain operates on a network of nodes, each maintaining a copy of the entire blockchain. This distribution ensures redundancy and eliminates a single point of failure.

2. **Trustless transactions**

   - Blockchain aims to reduce the need for trust between participants. Through cryptographic principles and consensus algorithms, participants can transact directly without relying on a central authority.

3. **Permissionless access**

   - In blockchains, participants have permissionless access, meaning anyone can join the network, validate transactions, and participate in the consensus process.

4. **Censorship resistant**
   - Decentralization makes it difficult for any single entity to censor or control the flow of information or transactions within the network. This censorship resistance is particularly relevant in public blockchains.
