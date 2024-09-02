import React from 'react';
import Text from '../components/Text'

const Profile = () => {
    const profileData = {
        name: 'Alan Tan',
        dob: '1946-09-15',
        gender: 'Male',
        disabilities: ['Hearing Loss'],
        phoneNumber: '+65 9876 5432',
        nextOfKinPhoneNumber: '+65 9123 4567',
    }

  return (
    <div>
      <h2 className='profile_page'>Profile Page</h2>
      <div className='profile_info'>
        <div className='image_with_text'>
          <img className='profile_pic' src='https://images.unsplash.com/photo-1535213679542-f42b6f164647?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          <p>{profileData.name}</p>
          <p className='home_address'>895A Tampines Street 81, <br />
          Singapore 521895, #01-01</p>
        </div>

        <div className="information">
          <div className="user_name">
            <p><Text english={'Name:'} chinese={'名字：'}/></p>
            <p>{profileData.name}</p>
          </div>

          <div className="user_name">
            <p><Text english={'Date of Birth:'} chinese={'生日：'}/></p>
            <p>{profileData.dob}</p>
          </div>

          <div className="user_name">
            <p><Text english={'Gender:'} chinese={'性：'}/></p>
            <p>{profileData.gender}</p>
          </div>

          <div className="user_name">
            <p><Text english={'Disabilities:'} chinese={'伤残：'}/></p>
            <p>{profileData.disabilities}</p>
          </div>

          <div className="user_name">
            <p><Text english={'Phone Number:'} chinese={'电话号码：'}/></p>
            <p>{profileData.phoneNumber}</p>
          </div>

          <div className="user_name">
            <p><Text english={'Next-of-kin Phone Number:'} chinese={'近亲电话号码：'}/></p>
            <p>{profileData.nextOfKinPhoneNumber}</p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Profile
