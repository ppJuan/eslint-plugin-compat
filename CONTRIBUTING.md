Steps:

1. modify code.

2. modify `version` in `package.json` file.

3. run `npm run build`.

4. delete `file` filed in `lib/cjs/package.json` and `lib/esm/package.json`.

5. commit.

5. run `npm publish --registry https://registry.npmjs.org/`