const Search = () => {
  return <input type="text" placeholder="Search" />;
};

const Header = () => {
  return (
    <div>
      <div>
        <h1>Food Hunger</h1>
      </div>
      <div>
        <ul>
          <li>
            <Search />
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
