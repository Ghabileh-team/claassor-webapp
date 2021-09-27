import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

export default function LoadingIndicator() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {promiseInProgress ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader type="ThreeDots" color="#1b164a" height="80" width="80" />
        </div>
      ) : null}
    </>
  );
}
