const reactElement = React.createElement('h1', {}, 'Hello world from react');
const headElement = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h2', { id: 'head2' }, 'Head from child div'),
    React.createElement('h3', { id: 'head3' }, 'Head from child2 div'),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
const grpElement = [reactElement, headElement];
root.render(grpElement);
