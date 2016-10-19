import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBD5feQxOQabcoUwhqW_Ugl9Cjy8sxJl6s';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>);
};

ReactDOM.render(<App />, document.querySelector('.container'));