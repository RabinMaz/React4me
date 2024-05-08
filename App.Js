import React from 'react';
import ReactDOM from 'react-dom/client';

const ReactheadElement = () => <h1>React from JSX</h1>;

const Headingcomp = () => (
  <>
    <ReactheadElement />
    <h1>This is react functional component</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Headingcomp />);
