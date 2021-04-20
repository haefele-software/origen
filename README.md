# ORIGEN

 [![npm](https://img.shields.io/npm/v/origen.svg)](https://www.npmjs.com/package/origen)  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/haefele-software/origen/blob/main/LICENSE) <a href="https://bundlephobia.com/result?p=origen@latest" target="\_parent">
  <img alt="" src="https://badgen.net/bundlephobia/minzip/origen@latest" />
</a>

A utility library, full of useful hooks to make your React experience even better.

### `useBoolValue`

> For maintaining the value of a boolean and being able to toggle it's value between `true` and `false`;

```js
export default function App() {
  const [value, toggleValue] = useBoolValue(false);

  return (
    <div>
      <h1>My value is: {value}</h1>
      <button onClick={toggleValue}>Toggle</button>
    </div>
  );
}
```

## License

ORIGEN is [MIT licensed](./LICENSE).
