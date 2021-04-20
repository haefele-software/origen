<img src="https://raw.githubusercontent.com/haefele-software/origen/main/assets/origen-header.png">

# ORIGEN

 [![npm](https://img.shields.io/npm/v/origen.svg)](https://www.npmjs.com/package/origen)  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/haefele-software/origen/blob/main/LICENSE) <a href="https://bundlephobia.com/result?p=origen@latest" target="\_parent">
  <img alt="" src="https://badgen.net/bundlephobia/minzip/origen@latest" />
</a>

A zero dependency, React utility library, filled with useful hooks to make your React experience even better.

#### `useBoolValue`

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

---

#### `useMousePosition`

> For getting the current `x` and `y` coordinates of the mouse cursor.
```js
export default function App() {
  const mousePosition = useMousePosition();

  return (
    <div>
      <h1>Width: {mousePosition.x}</h1>
      <h1>Height: {mousePosition.y}</h1>   
    </div>
  );
}
```

---

#### `useWindowDimensions`

> For getting the current `width` and `height` values of the window.

```js
export default function App() {
  const dimensions = useWindowDimensions();

  return (
    <div>
      <h1>Width: {dimensions.width}</h1>
      <h1>Height: {dimensions.height}</h1>      
    </div>
  );
}
```

## License

ORIGEN is [MIT licensed](./LICENSE).
