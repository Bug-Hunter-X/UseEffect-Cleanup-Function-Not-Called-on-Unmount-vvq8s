```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // This effect runs on every render, including the initial render
    console.log('Effect running');
    return () => {
      console.log('Cleanup function running');
      setIsMounted(false);
    };
  }, []); // Empty dependency array ensures this effect only runs once on mount

  useEffect(() => {
    if (!isMounted) {
      return;
    }
    // Perform actions only when mounted
    console.log('Component is mounted and ready to perform actions');
  }, [isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```