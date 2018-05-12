import React, { Component} from 'react'


class Listings extends Component {

state = {
      name: 'Don'
    }

  render () {
    return (<section id="Listings">
    {/* SEARCH BAR */}
        <section className="search-area">
          <input type="text" name="search" placeholder="search" />
        </section>

        <section className="sortby-area">
          <div>
            400 results found
          </div>
  
          {/* Creating the sortby area in main page */}
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value ="price-asc">Highest Price</option>
              <option value ="price-dsc">Lowest Price</option> 
            </select>
            {/* FONT AWESOME USED BELOW */}
              <div className="view">
              <i className="fa fa-th-list" aria-hhidden="true"></i>
              <i className="fa fa-th" aria-hidden="true"></i>
              </div>  
          </div>
        </section>
        
        {/* listing results sets the pictures */}
        <section className="listings-results">
          <div className="listing">
           <div className="listing-img">
                <span className="Address"> Address</span>
{/* details will change and give more details upon hover */}
            <div className="details">
            <div className="user-img"></div>
            <div className="user-details">
              <span className="user-name">Don Tinimbang</span>
              <span className="post-date">05/19/2018</span>
            </div>
            <div className="listing-details">
              <div className="floor-space">
              <span>1000 ft</span>
              </div>
              <div className="bedrooms">
              <i className="fas fa-bed" aria-hidden="true"></i>
              <span>10 bedrooms</span>
              </div>
            </div>
            </div> 
            <div className="bottom-info">
            <span> $1000/ month</span>
            <span>
              <i className="fas fa-location-arrow" aria-hidden="true"></i>
             Evanston, IL
             </span>
            </div>
          </div>
          </div>
        </section>
        
        {/* this will create the numbers at bottom */}
        <section className="pagination">
        <ul className="pagination-nums">
        <li>Prev</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>




        </ul>
        </section>

        </section>)
  }
}


export default Listings
