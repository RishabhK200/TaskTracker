import React from "react";
import {PlusCircleOutlined} from '@ant-design/icons'

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handle} type="text" value={props.input} />
      <button onClick={props.add}>
        <span> Add <PlusCircleOutlined /></span>
      </button>
    </div>
  );
}

export default InputArea;
