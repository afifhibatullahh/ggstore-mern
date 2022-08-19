import classNames from "classnames";
import React from "react";

interface TableRowProps {
  title: string;
  img: string;
  status: "Success" | "Pending" | "Failed";
  item: number;
  price: number;
  category: string;
}

export default function TableRow(props: TableRowProps) {
  const { title, category, item, price, status, img } = props;
  const ClassStatus = classNames({
    "float-start": true,
    "icon-status": true,
    pending: status == "Pending" ? true : false,
    success: status == "Success" ? true : false,
    failed: status == "Failed" ? true : false,
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${img}.png`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>
      </td>
      <td>
        <div>
          <span className={ClassStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
