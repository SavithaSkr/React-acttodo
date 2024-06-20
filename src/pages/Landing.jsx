import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

const Landing = () => {
  console.log("you are in landing page");
  const data = useLocation();
  console.log("this is data " + data.user);
  return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md ">
          {/* header */}
          <Header name={data.user} />
          {/* Cards */}
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"USA"} />
            <Card
              bgcolor={"#FD6663"}
              title={"2December"}
              subtitle={"14:12:20"}
            />
            <Card
              bgcolor={"#FCA201"}
              title={"Built Using"}
              subtitle={"React"}
            />
          </div>
          {/* Todo container */}
          <TodoContainer />
        </div>
      </div>
    </>
  );
};
export default Landing;
