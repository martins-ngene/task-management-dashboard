import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div>
        <Image src='/avatar.png' width={50} height={50} />
      </div>
      <div>
        <h2>John Doe</h2>
        <p>example@email.com</p>
      </div>
    </div>
  );
};

export default Profile;
