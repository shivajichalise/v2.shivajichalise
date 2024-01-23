# Cryptography

> Cryptography is the science and art of designing and using mathematical techniques to secure communication and data in the presence of third parties,
> protecting it from unauthorized access or manipulation.
> It uses mathematical algorithms to transform information into a format that is unintelligible to unauthorized individuals.

Cryptography uses various techniques and methods, including encryption, decryption, hash functions, digital signatures and many more.

#### Encryption

Encryption is a specific cryptographic technique/algorithm used to convert plaintext (readable data) into ciphertext (unreadable data)
through the use of an algorithm and a secret key.
The process involves encoding the information in such a way that only authorized parties possessing the correct key can decipher and retrieve the original data.

> A given algorithm will always transform the same plaintext into the same ciphertext if the same key is used.

<code language="bash">
+--------------+                           +--------------+
|              |                           |              |
|  Plain text  |                           |  Plain text  |
|              |                           |              |
+--------------+                           +--------------+
      |                                            ^
      v                                            |
+--------------+                           +--------------+
|              |                           |              |
|  Encryption  | -----> Cipher text -----> |  Decryption  |
|              |                           |              |
+--------------+                           +--------------+
</code>

There are two common types of encryption:

1. **Symmetric encryption**

- Symmetric key encryption, also known as secret key encryption,
  involves the use of a single key for both the encryption and decryption of data.
  This means that the same key is used by both the sender and the recipient to secure and access the information.
  Symmetric key encryption is fast and efficient but requires a secure method for distributing the key between the communicating parties.

2. **Asymmetric encryption**

- Asymmetric encryption, or public-key cryptography, uses a pair of keys: a public key and a private key.
  The public key is publicly shared and can be used by anyone to encrypt data, while the private key is kept secret and is used for decryption.
  The keys are mathematically related but cannot be derived from each other.
  Asymmetric encryption provides a secure way to exchange information without the need for a shared secret key,
  making it suitable for secure key exchange and digital signatures.

#### Decryption

Decryption is the process of converting encrypted or cipher text back into its original and readable form, known as plain text.
It requires the use of a specific key or algorithm that is designed to reverse the encryption process.
In a cryptographic system, decryption is the counterpart to encryption. While encryption transforms plain text into cipher text,
decryption reverses this process, turning cipher text back into plain text.
