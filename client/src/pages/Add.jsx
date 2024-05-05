import AddContainer from "../components/AddContainer";

const Add = () => {
  return (
    <div className="add">
      <h1>Add a new question</h1>
      <input type="text" placeholder="Write you question" />
      <AddContainer />
      <button>Save question</button>
    </div>
  );
};

export default Add;
