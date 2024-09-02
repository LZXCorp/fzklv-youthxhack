import React from 'react';

const Profile = () => {
  const profileData = {
    name: 'Alan Tan',
    dob: '1946-09-15',
    gender: 'Male',
    disabilities: ['Partial Vision Impairment'],
    phoneNumber: '+65 9876 5432',
    nextOfKinPhoneNumber: '+65 9123 4567',
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{profileData.name}</td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>{new Date(profileData.dob).toLocaleDateString()}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{profileData.gender}</td>
          </tr>
          <tr>
            <td>Disabilities:</td>
            <td>{profileData.disabilities.join(', ')}</td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>{profileData.phoneNumber}</td>
          </tr>
          <tr>
            <td>Next of Kin Phone Number:</td>
            <td>{profileData.nextOfKinPhoneNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
