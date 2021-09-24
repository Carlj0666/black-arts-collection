import './App.css';
import Homepage from './Homepage';

function App() {  

  // const atribs = [
  //   {id: 1, color: 'Black', alignment: 'Good'},
  //   {id: 2, color: 'Green', alignment: 'Neutral'},
  //   {id: 3, color: 'White', alignment: 'Evil'},
  // ]

  // const namedAtribs = atribs.map(a => <Homepage key={a.id} color={a.color} alignment={a.alignment}/>)

  return (
    <div className='App'>
      {/* map name logic extracted to the namedAtribs const */}
      {/* {namedAtribs} */}
      <Homepage />
    </div>
  );
}

export default App;