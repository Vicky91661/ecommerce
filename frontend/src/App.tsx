
import toast, { Toaster } from 'react-hot-toast';

import './App.css'

function App() {
  const notify = () => toast('Here is your toast.');
  return (
    <>
     
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
    </>
  )
}

export default App
