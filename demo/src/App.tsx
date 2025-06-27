import './App.css';
import { ReactUploadForm } from 'reactuploadform';

const App = () => {
  return (
    <div className="content">
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '35px' }}>
          <ReactUploadForm theme='dark' />
        </div>
        <div>
          <ReactUploadForm theme='light' />
        </div>
      </div>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
