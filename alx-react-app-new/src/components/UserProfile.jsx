import React from 'react';
import { useUser } from '../UserContext'; // تأكد من المسار الصحيح

function UserProfile() {
  const userData = useUser(); // الحصول على البيانات من السياق

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
