const root = document.querySelector('#root');

const div = React.createElement('div', {
    children: 'Hello React!',
    style: { color: 'red' },
});

ReactDOM.createRoot(document.querySelector('#root')).render(div);