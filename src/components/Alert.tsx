// shortcat rafce (ES7+)

import { ReactNode } from "react";

interface Props {
  // special prop that all components support called "children"
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
