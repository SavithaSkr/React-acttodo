import { useState } from "react";

const AddTodoForm = (props) => {
  const { activityarr, setActivityArr } = props;
  const [inputvalue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
    console.log(evt.target.value);
  };
  const addActivity = () => {
    setActivityArr([
      ...activityarr,
      { id: activityarr.length + 1, Activity: inputvalue },
    ]);
    setInputValue("");
  };
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-medium">Manage Activity</h2>
      <div>
        <input
          type="text"
          className="border border-black bg-transparent p-1"
          placeholder="Next Activity ?"
          onChange={handleChange}
          value={inputvalue}
        ></input>
        <button
          onClick={addActivity}
          className="bg-black text-white p-1 border border-black"
        >
          ADD
        </button>
      </div>
    </div>
  );
};
export default AddTodoForm;
