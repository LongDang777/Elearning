import React from 'react'
import profile2 from '../../../assets/img/profile-2.jpg'
import profile3 from '../../../assets/img/profile-3.jpg'
import profile4 from '../../../assets/img/profile-4.jpg'

export default function Recent() {
  return (
    <div className="recent-updates">
      <h2>Recent Updates</h2>
      <div className="updates">
        <div className="update">
          <div className="profile-photo">
            <img src={profile2} alt="" />
          </div>
          <div className="message">
            <p><b>Daniel </b>Lorem ipsum dolor sit amet. Received his order of course</p>
            <small className='text-muted'>2 Minutes Ago</small>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo">
            <img src={profile3} alt="" />
          </div>
          <div className="message">
            <p><b>David </b>Lorem ipsum dolor, sit amet consectetur adipisicing et!</p>
            <small className='text-muted'>2 Minutes Ago</small>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo">
            <img src={profile4} alt="" />
          </div>
          <div className="message">
            <p><b>Anna </b>Lorem ipsum dolor sit amet. Received his order of course</p>
            <small className='text-muted'>2 Minutes Ago</small>
          </div>
        </div>
      </div>
    </div>
  )
}
