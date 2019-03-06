# RSA Encryption 
## How it works
We have to choose to prime numbers. \
For example we will use `p=11` and `q=13`.
#### RSA-Modul
Then we calculate the RSA-Modul N. We can do this with `N=p*q=11*13=143` \
Then we need φ for the private Key. `φ(N)=(p-1)*(q-1)=120`\
#### Public-Key
The next step is to choose an public key (it must be a random and also prime number), for example i choose `e=23`
#### Private Key
Now we must calculate the private key with the Extended Euclidean algorithm. The result was `d=47`
#### Encrypt
Calculation:\
`c = m^e (mod N)`\
\
Example:\
`2 = 7^23 (mod 143)`
#### Decrypt
Calculation:\
`m = c^d (mod N)`\
\
Example:\
`7 = 2^47 (mod 143)`
#### Sign
Calculation:\
`c = m^d (mod N)`\
\
Example:\
`28 = 7^47 (mod 143)`
#### Verify
Calculation:\
`m = c^e (mod N)`\
\
Example:\
`7 = 28^23 (mod 143)`
## Quick Guide
Show your RSA public_key: get_publickey();´ \
Show your RSA private_key: get_privatekey();´\
\
Encrypt a message:
```
encrypt_msg(msg,pkey,noncee); 
/*
msg(Here you can write your Message), 
pkey (Here you need the public key of the reciever), 
nonce (Here you need the nonce of the reciever)
*/
```
\
Decrypt a message:
```
decrypt_msg(msg,pkey,noncee); 
/*
msg(Here you can write enrypted Message), 
pkey (Here you need your private key), 
nonce (Here you need your nonce)
*/
```

