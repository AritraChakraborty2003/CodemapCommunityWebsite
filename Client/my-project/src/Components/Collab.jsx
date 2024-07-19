import CollabIcon from "./CollabIcon";

const Collab = () => {
  return (
    <>
      <div className="CollabHolder bg-bgColor pb-8 pl-3">
        <p className="text-[9vmin] font-bold mt-2 ml-5  pb-7 pt-4">
          Our&nbsp;
          <span className="text-btnColor">Collaborations...</span>
        </p>

        <div className="iconHolder flex gap-x-4 gap-y-4 justify-center items-center flex-wrap ">
          <div className="flex flex-wrap  lg:gap-x-10 2xl:gap-x-9 gap-y-10 md:gap-y-5 justify-center items-center">
            <CollabIcon image="./VD1.png" />
            <CollabIcon image="./IIMT_IIC.png" />
            <CollabIcon image="./sb1.png" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Collab;
