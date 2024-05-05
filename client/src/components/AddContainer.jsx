import AddAnswer from "./AddAnswer";

const AddContainer = () => {
  const array = Array.from(Array(8).keys());
  return (
    <div className="addContainer">
      {array.map((number, index) => (
        <AddAnswer key={index} number={number + 1}/>
      ))}
    </div>
  );
};

export default AddContainer;
