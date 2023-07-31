export default function Navigation({ children }) {
  return (
    <>
      <a className="navigation__link" href="#home">
        {children}
      </a>
    </>
  );
}
