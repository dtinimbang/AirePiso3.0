import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Filter from '../Filter/Filter';
import Listings from '../Listings/Listings';

 class Home extends Component {

    state = {
      name: 'Joe'
    }
  


  render () {
    return (
    <section id="content-area">
        <Filter />
        <Listings />
    </section>
    )
  }
}

export default Home