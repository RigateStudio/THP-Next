import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Clients from './pages/Clients';

faker.locale = 'fr'

class App extends React.Component {
    render() {
        return (
            <main className="App">
                <h1>Liste des clients</h1>
                <Clients />
            </main>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
