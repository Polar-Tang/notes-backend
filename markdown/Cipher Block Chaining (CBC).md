- Break the plain text into blocks 
- Generate an initialization vector (IV)
- Xor the the first block with IV
- Xor the results with the subsequent block
- The result is xored again with the next block and so on
- Join the encrypted blocks together