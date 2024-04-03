# Encryption Algorithms

> Encryption algorithm is a set of mathematical procedures and rules used to transformplaintext into a cyphertext (encrypted data)
> in order to protect its integrity, confedentiality and authenticity during transmission or storage.
> The strength and security of an encryption algorithm are determined by factors such as
> `complexity of the algorithm`, `length and randomness of the crytographic keys`, and `resistance to crytographic attacks`

Some most commonly used encryption algorithms are:

1. DES

- DES stands for `Data Encryption Standard`.
- It is a symmetric encryption algorithm.
- It operates on fixed-size blocks of data (64 bits) (the cipher processes 64 bits (or 8 bytes) of the input data at a time) and supports key sizes of 56 bits.
- DES is now considered obsolete due to its relatively small key size (56 bits) and vulnerability to brute-force attacks.
- Triple DES (3DES) was introduced to address the security limitations of DES, which applies DES three times with different keys, it provides increased security but is slower and less efficient.

2. AES

- AES stands for `Advanced Encryption Standard`.
- It is a symmetric encryption algorithm.
- It operates on fixed-size blocks of data (128 bits) (the cipher processes 128 bits (or 16 bytes) of the input data at a time) and supports key sizes of 128, 192 and 256 bits.
- It offers a good balance between security and performance, making it suitable for various applications including
  data encryption, secure communication, and file storage.
- It is known for its resistance against cryptographic attacks such as brute-force attacks,
  making it highly secure for protecting sensitive data.
- AES is selected through a public competition by the National Institute of Standards and Technology (NIST) to replace older encryption standards like DES.

3. RSA

- RSA stands for `Rivest-Shamir-Adleman`.
- It is a asymmetric encryption algorithm.
- For key generation RSA involves selecting two large prime numbers and computing their product to generate the public and private keys.
- The security of RSA algorithm relies on the difficulty of factoring large prime numbers.
- It is widely used for secure data transmission, digital signatures, and key exchange in secure communication protocols like SSL/TLS.
- The thing to keep in find is encryption and decryption operations can be computationally intensive, especially for large key sizes.
