import React from "react";

const Friend = props => {
  const { name, age, email } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default Friend;
