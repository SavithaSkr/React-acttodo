const TodoItem = (props) => {
  const { activityarr, setActivityArr, id, item, index } = props;

  console.log("Props:", props); // Debugging line

  const handleDelete = (deleteid) => {
    var temparr = activityarr.filter((item) => {
      if (item.id === deleteid) {
        return false;
      } else {
        return true;
      }
    });
    setActivityArr(temparr);
  };
  return (
    <div className="flex justify-between">
      <p>
        {index + 1} . {item.Activity}
      </p>
      <button className="text-red-500" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};
export default TodoItem;
