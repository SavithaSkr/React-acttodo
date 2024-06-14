import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoContainer = () => {
  const [activityarr, setActivityArr] = useState([
    {
      id: 1,
      Activity: "Go for a Walk",
    },
    {
      id: 2,
      Activity: "Have a Breakfast",
    },
    {
      id: 3,
      Activity: "Take a Shower",
    },
  ]);
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <AddTodoForm
          activityarr={activityarr}
          setActivityArr={setActivityArr}
        />
        {/* todo list */}
        <TodoList activityarr={activityarr} setActivityArr={setActivityArr} />
      </div>
    </div>
  );
};
export default TodoContainer;
