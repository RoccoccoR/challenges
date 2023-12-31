import logo from "../img/logo.jpg";

export default function Logo({ children }) {
  return (
    <>
      {children}
      <a href="#">
        <img className="round-image" src={logo} alt="logo" />
      </a>
    </>
  );
}
