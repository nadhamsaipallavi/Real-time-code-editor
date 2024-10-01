import React from 'react'


const home2 = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className=" homePageLogo"src="/code.jpeg" alt="logo"/>
        <h4 className="mainLabel">Sign Up</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="UserName"/>
          <input type="text" className="inputBox" placeholder="E-mail"/>
          <input type="text" className="inputBox" placeholder="contact-number"/>
          <input type="text" className="inputBox" placeholder="New-password"/>
          <input type="text" className="inputBox" placeholder="Retype-password"/>
          <a href="/room" className="btn joinBtn">Sign up</a>
          <span className="createInfo">
            If you already have an account  &nbsp;
            <a href="/home" className="createNewBtn">Login</a>
          </span>
        </div>
      </div>
      <footer>
        <h4>copyrights reserved</h4>
      </footer>
      
    </div>
  )
}
export default home2    
