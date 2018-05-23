# #5 Obtain a random number

## Generate a random floating point number between 0 and 1.
  `console.log(Math.random());`
## Generate a random integer between 0 and and an arbitrary maximum value (try 10, 100, 1000)
  `function getRandomInt(maximumNum) {
  return Math.floor(Math.random() * Math.floor(maximumNum));
  }
  console.log(getRandomInt(100));`
## Why is Math.random insecure?
  - It is not always random, it just looks random visually. If a hacker wanted to get
  your information, they could predict it.

## What built-in node.js library should you consider using instead?
- [In Node.js, the most widely available CSPRNG is the crypto.randomBytes function](https://gist.github.com/joepie91/7105003c3b26e65efcea63f3db82dfba)

## Is it okay to use Math.random if there's no need for cryptographically secure randomness?
  - Yes, it is okay.
