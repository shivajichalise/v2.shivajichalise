# Blockchain:

> Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.
> It is an immutable, sequential chain of records called Blocks. They can contain transactions, files or any data you like, really. But the important thing is that they’re chained together using hashes.

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
