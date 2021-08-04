import React , { Component} from 'react';
import './App.css';


import { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
     monsters: [ ],
     searchField: ''
    }
    // .bind is a method on any function that returns a new
    // function where the context of[this ] is set to whatever is passed 
   /*  this.handleChange = this.handleChange.bind(this); */
  }

  // making handlechange as a method with the e signature
/*   handleChange(e) {
    this.setState({searchField: e.target.value})
  }
 */

  // component did mount will call any code inside its function and render it
  componentDidMount() {
    //this fetch returns a promise which is .then 
    fetch('https://jsonplaceholder.typicode.com/users')

    //.then just return Response which is not json and not understood by js 
   /*  .then(response =>console.log(response)) */
    // the data need to be transformed into json format
    .then(response =>response.json())
    // now return the body as users then set users to monsters 
    .then(users=> this.setState({monsters:users}))
  }

      // the above code {handleChange(e)} can be re-written with arrow function 
    // this way we don't need to bind  [this] into the method 
    // because arrow function automatically define [this]

    handleChange = e =>{
      this.setState({searchField: e.target.value})
    }
  
  render() {
    // destructing 
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monster'
            handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>

          </CardList>
 
      </div>
    )
  }
}

export default App;
