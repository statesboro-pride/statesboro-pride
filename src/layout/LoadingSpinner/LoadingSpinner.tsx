import React from "react";
import "./LoadingSpinner.css";

export type LoadingSpinnerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  const { className, children, ...p } = props;
  return (
    <div className={"loading-spinner" + (className ? ` ${className}` : "")} {...p}>
      <div>
        <span>
          <svg viewBox="22 22 44 44">
            <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle>
          </svg>
        </span>
      </div>
      {children}
    </div>
  );
}
