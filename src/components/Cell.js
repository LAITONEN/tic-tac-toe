import './Cell.scss';

function App(props) {

  const { children, onClick } = props;

  return (
    <div className="Cell" onClick={onClick}>
      {children === 1 ? 'X' : children === 2 ? 'O' : ''}
    </div>
  );
}

export default App;
