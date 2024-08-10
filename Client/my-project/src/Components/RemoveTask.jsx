import axios from "axios";

const RemoveTask = () => {
  const deleteTask = () => {
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "task/delete")
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data Deleted successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="boxHolder p-5 w-[95vw] md:w-[70vmin]">
      <div className="box border-[1px] rounded-[2vmin] p-5">
        <p className="text-center text-[4vmin]">Remove uncompleted task</p>
        <div className="flex justify-center items-center">
          <button
            className="bg-black text-white p-2 mt-[8vmin]"
            onClick={deleteTask}
          >
            Remove Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveTask;
