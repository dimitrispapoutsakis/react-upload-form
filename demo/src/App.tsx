import './App.css';
import { ReactUploadForm } from 'reactuploadform';

const App = () => {
  return (
    <div className="content">
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '35px' }}>
          <ReactUploadForm
            theme='dark'
            upload={{
              serverUrl: 'http://localhost:8080/upload',
              fileFieldName: 'file',
              headers: {
                'Authorization': 'Client-ID ******'
              },
            }}
          />
        </div>
        <div>
        <ReactUploadForm
            upload={{
              serverUrl: 'http://localhost:8080/upload',
              fileFieldName: 'file',
              headers: {
                'Authorization': 'Client-ID ******'
              },
            }}
          />
        </div>
      </div>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
