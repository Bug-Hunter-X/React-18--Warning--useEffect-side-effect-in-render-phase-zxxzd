```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logRender = () => {
        console.log('Component rendered:', count);
    };
    logRender();
    return () => {};
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```