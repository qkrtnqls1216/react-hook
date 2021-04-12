import React, {useState} from 'react';
import './App.css';
const App = (props) => {
    const [movieContent, setMovieContent] = useState({
        title:'',
        content:''
    })
    const getValue = e => {
        const {name, value}= e.target;
        setMovieContent({
            ...movieContent,
            [name]:value
        })
        console.log(movieContent);
    };
    const getValue1 = e => {
        const {name, value}= e.target;
        setMovieContent({
            ...movieContent,
            [name]:value
        })
        console.log(movieContent);
    };
    return(
      <div className="App">
          <h1>Movie Review</h1>
          <div className="Movie-container">
              <h2>제목</h2>
              <div>
                  내용
              </div>
          </div>
          <div className="form-wrapper">
            <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title'/>
            <textarea className="text-area" type='text-area' placeholder='내용'onChange={getValue1} name='textarea'></textarea>
          </div>
        <button className="submit-button">입력</button>
      </div>   
    );   
}

export default App;