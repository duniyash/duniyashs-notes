import { useState } from 'react';

import Header from './components/UI/Header';

function App() {
  const [darkModeState, setDarkModeState] = useState(false);

  return (
    <main
      className={`h-screen transition duration-300 ease-in-out  ${darkModeState ? 'bg-slate-900 ' : 'bg-slate-100 '}`}
    >
      <Header darkModeState={darkModeState} setDarkModeState={setDarkModeState} />
    </main>
  );
}

export default App;
