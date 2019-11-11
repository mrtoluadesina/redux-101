import React, {useState} from "react";
import { connect } from "react-redux";
import { submit } from "./redux/actions";
import List from "../List";

function Home(props) {
  const { shoes } = props;
  const [values, setValues] = useState({
    name: "",
    price: 0
  })

  const handleChange = e => setValues({...values, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      ...values
    };

    const result = await props.submitHandler(payload);
    console.log('I got here!');
    console.log(result);
  };

  return (
    <div>
      <p>This is Home</p>
      {shoes.map((shoe, index) => (
        <List key={index} value={shoe} />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="enter Price"
          name="price"
          onChange={handleChange}
        />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.HomeReducer.isLoading,
  shoes: state.HomeReducer.shoes,
  isAdmin: state.LoginReducer.isAdmin
});

const mapDispatchToProps = dispatch => ({
  submitHandler: payload => dispatch(submit(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
