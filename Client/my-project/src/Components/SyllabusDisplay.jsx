const SyllabusDisplay = (props) => {
  return (
    <>
      {props.data.map((val, ind) => (
        <>
          <div className="ml-6 pb-5">
            <p className="text-3xl font-bold pb-2">
              {ind + 1}
              {". " + val.name}
            </p>
            <p className="text-xl font-medium">Role: {val.role}</p>
            <p className="text-xl ">Topic 1: {val.topic1}</p>
            <p className="text-xl ">Topic 2: {val.topic2}</p>
            <p className="text-xl">Topic 3: {val.topic3}</p>
            <p className="text-xl ">Topic 4: {val.topic4}</p>
          </div>
        </>
      ))}
    </>
  );
};
export { SyllabusDisplay };
