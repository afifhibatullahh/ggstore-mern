import classNames from "classnames";
import React from "react";
interface ButtonTabProps {
  label: string;
  active?: boolean;
}
export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { label, active } = props;
  const className = classNames({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <a data-filter="*" href="#" className={className}>
      {label}
    </a>
  );
}
