import React from 'react'

function News() {
  return (
    <>
    <nav>
        <div className="logo">
            <h2>BBC NEWS</h2>
        </div>
        <ul>
            <li>Trending</li>
            <li>All News</li>
            <li>Headline</li>
        </ul>
        <div className="Search">
            <input type="text" name="" placeholder='Search Here' id="" />
            <button>Search</button>
        </div>
    </nav>
    <div className="Category">
        <button>Sports</button>
        <button>Entertainment</button>
        <button>Politics</button>
        <button>Weather</button>
        <button>Technologies</button>
    </div>
    </>
  )
}

export default News