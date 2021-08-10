

function App(props) {

  const { children } = props;

  return (
    <div className="Cell">
      {children}
    </div>
  );
}

export default App;
