# Encryption Algorithms

> Encryption algorithm is a set of mathematical procedures and rules used to transformplaintext into a cyphertext (encrypted data)
> in order to protect its integrity, confedentiality and authenticity during transmission or storage.
> The strength and security of an encryption algorithm are determined by factors such as
> **complexity of the algorithm**, **length and randomness of the crytographic keys**, and **resistance to crytographic attacks**

Some most commonly used encryption algorithms are:

1. DES

- DES stands for **Data Encryption Standard**.
- It is a symmetric encryption algorithm.
- It operates on fixed-size blocks of data (64 bits) (the cipher processes 64 bits (or 8 bytes) of the input data at a time) and supports key sizes of 56 bits.
- DES is now considered obsolete due to its relatively small key size (56 bits) and vulnerability to brute-force attacks.
- Triple DES (3DES) was introduced to address the security limitations of DES, which applies DES three times with different keys, it provides increased security but is slower and less efficient.

2. AES

- AES stands for **Advanced Encryption Standard**.
- It is a symmetric encryption algorithm.
- It operates on fixed-size blocks of data (128 bits) (the cipher processes 128 bits (or 16 bytes) of the input data at a time) and supports key sizes of 128, 192 and 256 bits.
- It offers a good balance between security and performance, making it suitable for various applications including
  data encryption, secure communication, and file storage.
- It is known for its resistance against cryptographic attacks such as brute-force attacks,
  making it highly secure for protecting sensitive data.
- AES is selected through a public competition by the National Institute of Standards and Technology (NIST) to replace older encryption standards like DES.

3. RSA

- RSA stands for **Rivest-Shamir-Adleman**.
- It is a asymmetric encryption algorithm.
- For key generation RSA involves selecting two large prime numbers and computing their product to generate the public and private keys.
- The security of RSA algorithm relies on the difficulty of factoring large prime numbers.
- It is widely used for secure data transmission, digital signatures, and key exchange in secure communication protocols like SSL/TLS.
- The thing to keep in find is encryption and decryption operations can be computationally intensive, especially for large key sizes.

# Hashing

> Hashing is a process of converting input data of any size into a fixed-sized string of bytes using a mathematical function called hash function.
> The output of the hash function, called hash value or hash code, is a unique representation of the input data.
> Hashing is commonly used for data integrity verification, digital signatures, password storage, and various other cryptographic applications.
> It is computationally infeasible to reverse the hash value back to the original input data.
> Hashing is a deterministic process, given the same input, a hash function will always produce the same hash value.

Some most commonly used hashing algorithms are:

1. MD5

- MD5 stands for **Message Digest Algorithm 5**.
- It produces a 128-bit hash value.
- MD5 was once widely used but now considered insecure due to vulnerabilities as it is susceptible to collision attacks, where different inputs produce the same hash value.
- MD5 was previously used for checksums, digital signatures, and password storage, but now deprecated in favor of more secure hash functions like SHA-256.

2. SHA-256

- SHA-256 stands for **Secure Hash Algorithm 256-bit**.
- It produces a fixed-size hash value of 256 bits (32 bytes).
- It processes input data in 512-bit blocks and produces a 256-bit hash output.
- It was designed to resist collision attacks and other cryptographic vulnerabilities and is now suggested over MD5 and SHA-1.
- It is a part of the SHA-2 family, which includes various hash functions with different output sizes (e.g. SHA-224, SHA-256, SHA-384, SHA-512).

3. Bcrypt

- It is a cryptographic hashing function based on blowfish cipher and is specifically designed for password hashing.
- It offers strong resistance against brute-force attacks and rainbow table attacks due to its adaptive hashing algorithm.
- It automatically generates and includes a random salt for each password hash.
- A salt is a randomly generated value that is appended to the input data before it is hashed. The purpose of a salt is to add randomness and uniqueness to each hash value generated, even when the input data is the same.
- It is deliberately designed to be computationally intensive, making it more challenging for attackers to crack hashed passwords.

4. Keccak-256

- Keccak-256 is a cryptographic hash function in the SHA-3 family.
- It is based on the Keccak sponge construction.
- It won the NIST SHA-3 competition, surpassing other candidates.
- Keccak-256 is highly secure and resilient against cryptographic attacks.
- One could throw around fancy terms like 'sponge construction' and 'cryptanalysis,' but let's be real – I have no clue what those mean!
- Seriously, what's a sponge construction anyway? It absorbs an input of any length and produces a fixed-size output? Don't all hashing algorithms do the same?
- The details of sponge constructions and cryptographic primitives might be a bit over my head, but here's the bottom line:
  Keccak-256 is considered highly secure and resistant to known cryptographic attacks.
- Additionally, Keccak-256 is extensively used in the Ethereum blockchain platform.
- Ethereum employs Keccak-256 as part of its hashing algorithm for various purposes, including generating cryptographic addresses, verifying transactions, and securing smart contracts.
