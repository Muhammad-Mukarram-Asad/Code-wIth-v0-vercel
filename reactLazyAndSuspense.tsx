// React Lazy and Suspense Example

const LazyComponent = ()=>{
return(
  <h1>I am the lazy component.</h1>
)
}
export default LazyComponent;

// Now in main app.js file:
const HomePage = () => {
  const lazyComponent = import(()=> React.Lazy("./LazyComponent"));
  return (
    <h1>Main Component</h1>
    
  )
}
