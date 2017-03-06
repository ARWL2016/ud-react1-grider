import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = AIzaSyDlDJRFWCeRY-bC3qRaXEdysQM0-NfcvxU;  

const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container')); 

