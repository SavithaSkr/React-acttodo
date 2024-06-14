import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const { users } = props;
  const [eusername, SetEusername] = useState();
  const [epassword, SetEpassword] = useState();
  const [ruser, setRuser] = useState(true);

  const handleUInput = (e) => {
    SetEusername(e.target.value);
  };
  const handlePInput = (e) => {
    SetEpassword(e.target.value);
  };

  const checkUser = () => {
    var userfound = false;
    users.forEach((item) => {
      if (item.userName === eusername && item.password === epassword) {
        console.log("login Success");
        userfound = true;
        navigate("/landing", { state: { user: eusername } });
      }
    });
    if (userfound === false) {
      console.log("login Failed");
      setRuser(false);
    }
  };
  return (
    <>
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <h2 className="text-3xl font-medium">Hey Hi!</h2>
          {ruser ? (
            <p>I help you manage your activities after you login</p>
          ) : (
            <p className="text-red-500">Please Sign Up Before you Login</p>
          )}

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

            <button
              onClick={checkUser}
              className="bg-[#8272DA] w-24 p-1 rounded-md"
            >
              Login
            </button>
            <p>
              Dont have an Account?{" "}
              <Link to={"/signup"} className="underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
