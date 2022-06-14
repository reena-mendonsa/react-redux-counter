import { connect } from "react-redux";
import Steps from "./Steps";
import { increment, decrement, reset } from "../store/action";
import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return (
    <React.Fragment>
      <h1>{props.count}</h1>
      <Steps />
      <div>
        <button onClick={() => props.dispatch(increment())}>Increment</button>
        <button onClick={() => props.dispatch(decrement())}>Decrement</button>
        <button onClick={() => props.dispatch(reset())}>Reset</button>
      </div>
    </React.Fragment>
  );
}

function getCount(state) {
  return {
    count: state.value,
  };
}

export default connect(getCount)(App);
