import logo from './logo.svg';
import './App.css';

function App() {

  const available_functions = {
    endpoints: [
      {
        name: 'List of speakers',
        path: '/.netlify/functions/speakersList'
      },
      {
        name: 'List of names',
        path: '/.netlify/functions/speakersList'
      }
    ]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Endpoint for serverless function:</p>
        <h3>
          {
            available_functions.endpoints.map((endpoint, index) => {
              const { name, path } = endpoint;
              return (
              <div key={index}>
                  <span>{name}: </span>
                  <a href={`${window.location.origin}${path}`}
                    target='_blank' rel="noreferrer">
                    {window.location.origin}{path}
                  </a>
              </div>
              )
            })
          }
        </h3>
      </header>
    </div>
  );
}

export default App;
