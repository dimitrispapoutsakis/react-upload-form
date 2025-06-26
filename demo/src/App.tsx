import './App.css';
// import { Button } from 'reactuploadform';
import React, {Suspense} from 'react';
// const Button = React.lazy(() => import('reactuploadform'));

const App = () => {
  return (
    <div className="content">
    {/*  <Suspense fallback={null}>
      <Button />
      </Suspense>*/}
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
