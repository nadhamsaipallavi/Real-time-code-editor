import React from 'react'


const home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className=" homePageLogo"src="/code.jpeg" alt="logo"/>
        <h4 className="mainLabel">Login</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="UserName"/>
          <input type="text" className="inputBox" placeholder="Password"/>
          <a href="/room" className="btn joinBtn">Login</a>
          <span className="createInfo">
            If you don't have an account  &nbsp;
            <a href="/home2" className="createNewBtn">Sign Up</a>
          </span>
        </div>
      </div>
      <footer>
        <h4>copyrights reserved</h4>
      </footer>
      
    </div>
  )
}

export default home
