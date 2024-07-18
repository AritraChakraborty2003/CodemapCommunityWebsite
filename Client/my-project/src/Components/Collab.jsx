import CollabIcon from "./CollabIcon";

const Collab = () => {
  return (
    <>
      <div className="CollabHolder bg-bgColor pb-5">
        <p className="text-[9vmin] font-bold mt-4 ml-5  pb-7 pt-7">
          Our&nbsp;
          <span className="text-btnColor">Collaborations...</span>
        </p>

        <div className="iconHolder flex gap-x-4 gap-y-4 justify-center items-center flex-wrap ">
          <div className="flex flex-wrap  lg:gap-x-12 2xl:gap-x-12 gap-y-8 justify-center items-center">
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
