import React from 'react'

function User() {
  return (
    <>
        <div className="user" onClick={()=>{window.alert('User Authentication has not started, but you can enjoy music, Sorry for inconvenience')}}>
                <i className="bi bi-person-circle"></i>
                <span style={{'position':'relative','top':'1.5px'}}>User</span>
                <i style={{'position':'relative','top':'3px'}} className="bi bi-caret-down-fill"></i>
        </div>
    </>
  )
}

export default User
