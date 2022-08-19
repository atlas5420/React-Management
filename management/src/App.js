import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import React from 'react';

const customers = [{
  'image': 'http://placeimg.com/64/64/any',
  'id': '1',
  'name': '고객1',
  'birthday': '961222',
  'gender': '남자',
  'job': '학생'
},
{
  'image': 'http://placeimg.com/64/64/1',
  'id': '2',
  'name': '고객2',
  'birthday': '961222',
  'gender': '남자',
  'job': '학생'
},
{
  'image': 'http://placeimg.com/64/64/2',
  'id': '3',
  'name': '고객3',
  'birthday': '961222',
  'gender': '남자',
  'job': '학생'
},
]

class App extends Component {
  render() {
    return (
      <div class="container">
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              ></Customer>
            )
          })
        }
      </div>
    );
  }
}

export default App;
