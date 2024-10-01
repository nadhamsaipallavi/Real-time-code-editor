import React from 'react'


const Room = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className=" homePageLogo"src="/code.jpeg" alt="logo"/>
        <h4 className="mainLabel">Invitation Room Id</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="Room Id"/>
          <input type="text" className="inputBox" placeholder="Username"/>
          <button className="btn joinBtn">Join</button>
         
        </div>
      </div>
      <footer>
        <h4>copyrights reserved</h4>
      </footer>
      
    </div>
  )
}

export default Room