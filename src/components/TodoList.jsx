import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { activityarr, setActivityArr } = props;

  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h2 className="text-2xl font-medium">Today's Activity</h2>

      {activityarr.length === 0 ? <p>You havent added anything yet</p> : ""}
      {/* instead of creating alone. we can create using map */}
      {/*  <p>{activityArr[0].Activity}</p> */}
      {activityarr.map((item, index) => {
        return (
          <TodoItem
            id={item.id}
            item={item}
            index={index}
            activityarr={activityarr}
            setActivityArr={setActivityArr}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
