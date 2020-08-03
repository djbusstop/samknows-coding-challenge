# Coding Challenge

This is my submission for the SamKnows coding challenge. First off, I'm sorry, I didn't fork the repo!

## Converter

### Nice to Haves

- I would use a locale based formatter for displaying the value properly, for example for currencies that don't use cents such as Yen. I would use a library for this.
- I was lazy with how I passed the values from my getRates hook in to the components, normally I would use a context if I was sharing data like this, because eventually the component tree would get grow and I would benefit from sharing that state in a better way.
- I would handle the non-number input validation and error's that could arise from that better.
- The values on the converter box would fix to the bottom of the box, in case the rates box was taller,
- I hacked a solution to the fact that the Euro value wasn't included in the default rates, by adding it in case it didn't exist. I would look more in to the API to see if there's a data side fix.

## Flatten

In order to not spend too much time dealing with webpack/babel boilerplate, I decided to just write to work with node.js. The version I am using is `v14.3.0`.

This was developed with TDD principles. You can run tests with:

```
npm i
npm run test
```
