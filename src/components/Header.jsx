const Header = (props) => {
  const { name } = props;
  return (
    <>
      <h2 className="text-3xl font-m">Hello {name}</h2>
      <p>I help you manage your activities</p>
    </>
  );
};
export default Header;
