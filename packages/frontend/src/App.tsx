import React, { FC } from 'react';
import './App.scss';
import LoginForm from './components/LoginForm/LoginForm';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <header>
                    <NavBar />
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact component={LoginForm} />
                    </Switch>
                </main>
                <footer>
                    <ul>
                        <li>Home</li>
                    </ul>
                </footer>
            </Router>
        </div>
    );
};

export default App;
