import React from "react";

const HistryRow = ({ history }) => {
  const { email, image, instructor, name, price, transactionId } = history;
  return (
    <tr className="text-base font-semibold font-nunito">
      <td>
        <img
          src={image}
          className="h-20 w-20 object-cover object-center"
          alt=""
        />
      </td>
      <td>{name} class</td>
      <td>{instructor}</td>
      <td>{transactionId}</td>
      <td>${price}</td>
    </tr>
  );
};

export default HistryRow;
