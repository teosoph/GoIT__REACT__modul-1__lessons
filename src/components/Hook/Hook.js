import { useState } from "react";

export function Hook() {
  const [state, setState] = useState({
    num: 0,
    error: null,
  });

  const { error, num } = state;

  return (
    <div>
      {error ? (
        <h1 style={{ color: "red" }}>{error}</h1>
      ) : (
        <>
          <h1>Value: {num}</h1>
          <button
            onClick={() => {
              if (num === 9) {
                setState((prevState) => ({
                  ...prevState,
                  error: "Too much!!!",
                }));
              } else {
                setState((prevState) => ({
                  ...prevState,
                  num: prevState.num + 1,
                }));
              }
            }}
          >
            increment
          </button>
        </>
      )}
    </div>
  );
}
