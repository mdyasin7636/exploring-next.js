const WithLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <a href="">Navbar</a>
      </nav>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
