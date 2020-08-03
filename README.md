# Coding Challenge

This is my submission for the SamKnows coding challenge. Thank you very much for the opportunity, and I look forward to your feedback.

## Converter

To run:

```
cd converter
npm i
npm run start
```

The README in the folder is the boilerplate one from create-react-app.

This task was quite fun, I went a little overboard with it and allowed the rates grid to be clickable to set a new target currency. I didn't take too long to test it manually, I wonder if you will find any quirks in the software.

Regarding CSS, I chose to use styled components, as they are very fast to bootstrap projects with. I find them a bit clunky sometimes, as opposed to using classnames which can be changed without changing the semantic meaning of tags. However, I think for this project they saved me time and still accomplished what I needed.

### Nice to Haves

- I would use a locale based formatter for displaying the value properly, for example for currencies that don't use cents such as Yen. I would use a library for this.
- The hook I started with grew out of control as I was progressing with the task. Normally I would convert this over to a context, since the hook started handling multiple states. Also, using a context would be preferred when sharing data like this between components, because in the case the component tree grows deeper, it's better to be able access the needed states and setter from a context within each component, rather than needing to pass them down. However, I decided to keep using my giant hook for the sake of time, and comment here instead that typically I would take the time to refactor it.
- I would improve handling of the non-number input validation and errors that could arise from that.
- Implement loading spinners or screens.
- I hacked a solution to the fact that the Euro value wasn't included in the default rates, by adding it in case it didn't exist in the response. I would look more in to the API to see if there's a data side fix, or would try to improve my solution. You can see my solution in the getRates hook.
- I would improve the responsive design by fine tuning the breakpoints, max widths, and grid alignments.

## Flatten

In order to not spend too much time dealing with webpack/babel, I decided to just write to work with node.js. The version I am using is `v14.3.0`.

This was developed with TDD principles. You can run tests with:

```
cd flatten
npm i
npm run test
```
