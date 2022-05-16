import { useState } from 'react';
import './App.css';

import { withErrorBoundary, ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

function Bomb({ username }) {
  if (username === 'bomb') {
    throw new Error("CABOOM");
  }
  return `Hi ${username}`
}

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <header className='App-header'>
        <label>
          {`Username: `}
          <input
            placeholder={`type "bomb"`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <ErrorBoundary 
        FallbackComponent={ErrorFallback}
        // onReset={() => setUsername("")}
        resetKeys={[username]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </header>

    </div>
  );
}

// export default withErrorBoundary(App, {
//   fallback: <div>Что-то пошло не так</div>,
//   fallbackRender: () => <div>Что-то пошло не так</div>,
//   // FallbackComponent,
// });

export default App;