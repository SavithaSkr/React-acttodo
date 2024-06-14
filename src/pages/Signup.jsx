import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const navigate = useNavigate();
  const { users, setUsers } = props;

  const [eusername, SetEusername] = useState();
  const [epassword, SetEpassword] = useState();

  const handleUInput = (e) => {
    SetEusername(e.target.value);
  };

  const handlePInput = (e) => {
    SetEpassword(e.target.value);
  };

  const addUser = () => {
    setUsers([...users, { userName: eusername, password: epassword }]);
    navigate("/");
  };
  return (
    <>
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <h2 className="text-3xl font-medium">Hey Hi!</h2>
          <p>Signup Here</p>

          <div className="flex flex-col gap-2 my-2">
            <input
              type="text"
              className="w-52 border-black p-1 bg-transparent border rounded-md"
              placeholder="UserName"
              onChange={handleUInput}
            ></input>
            <input
              type="text"
              className="w-52 border-black p-1 bg-transparent border rounded-md"
              placeholder="Password"
              onChange={handlePInput}
            ></input>
            <input
              type="text"
              className="w-52 border-black p-1 bg-transparent border rounded-md"
              placeholder="Confirm Password"
            ></input>
            <button
              className="bg-[#FCA201] w-24 p-1 rounded-md"
              onClick={addUser}
            >
              Sign Up
            </button>
            <p>
              Alreay have an Account?{" "}
              <Link to={"/"} className="underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
