import React from "react";

import { LoadingSpinner } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <LoadingSpinner>Loading…</LoadingSpinner>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
