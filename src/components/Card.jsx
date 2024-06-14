const Card = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bgcolor }}
      className="px-10 py-5 border rounded-md text-center flex-grow"
    >
      <h2 className="font-medium text-2xl">{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
};
export default Card;
