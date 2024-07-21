const CardEvent = (props) => {
  return (
    <>
      <div className="cardHolder  bg-bgColor shadow-xl p-3 pb-6 rounded-md border-[1px] w-[60vmin]  flex flex-col justify-center items-center ">
        <div className="imageHolder bg-white p-1 w-[35vmin] h-[30vmin] border-lightGrey border-[1px] mt-1 rounded-md">
          <img
            src={props.image}
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <div className="mt-2 font-roboto">
          <p className="text-[4vmin] md:text-[3vmin] font-medium">
            Event: <b>{props.event} </b>
          </p>
          <p className="md:text-[3vmin] font-medium">
            Topic: <b>{props.topic} </b>
          </p>
          <p className="md:text-[3vmin] font-medium">
            Category: <b>{props.category} </b>
          </p>
        </div>
      </div>
    </>
  );
};
export default CardEvent;
