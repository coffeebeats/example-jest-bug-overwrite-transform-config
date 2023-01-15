# example-jest-bug-overwrite-transform-config

> NOTE: This bug [#13769](https://github.com/facebook/jest/issues/13769) was addressed in [#13770](https://github.com/facebook/jest/pull/13770).

## Explanation

This example repository demonstrates a bug in `jest` (as of version `29.3.1`).

When providing custom "transform" entries via the Jest configuration object, if
two entries use the same processor, then any configuration passed to the first
entry will be overwritten by the second entry.

This is caused by the implementation of transformer loading, where transformer
configuration is [cached by preprocessor filepaths alone](https://github.com/facebook/jest/blob/61a64b53fe72b00fb17d7aabe5a54c4d415a845f/packages/jest-transform/src/ScriptTransformer.ts#L281); the cache does not
consider the case where two different transform patterns use the same preprocessor
with differing options:

```js
async loadTransformers(): Promise<void> {
    await Promise.all(
      this._config.transform.map(
        async ([, transformPath, transformerConfig]) => {
          let transformer: Transformer | TransformerFactory<Transformer> =
            await requireOrImportModule(transformPath);

          if (transformer == null) {
            throw new Error(makeInvalidTransformerError(transformPath));
          }
          if (isTransformerFactory(transformer)) {
            transformer = transformer.createTransformer(transformerConfig);
          }
          if (
            typeof transformer.process !== 'function' &&
            typeof transformer.processAsync !== 'function'
          ) {
            throw new Error(makeInvalidTransformerError(transformPath));
          }
          const res = {transformer, transformerConfig};

          /*
           * The bug manifests here, where the 'transformPath' from
           * the latest 'transform' entry will overwrite 'res' completely.
           */
          this._transformCache.set(transformPath, res);
        },
      ),
    );

    this._transformsAreLoaded = true;
  }
```

## How to test

There is a simple test case set up that simply imports a few files. A custom, no-op preprocessor is
provided that will error if passed `{ fail: true }`. The [Jest configuration file](jest.config.js) provided has four different options, demonstrating how configurations can get overridden.

Simply uncomment one of the configurations provided `jest.config.js` and run `yarn test`.
