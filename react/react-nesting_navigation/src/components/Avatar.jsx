import avatar from "../img/avatar.jpg";

export default function Avatar({ children }) {
  return (
    <>
      {children}
      <img className="round-image" src={avatar} alt="avatar" />
    </>
  );
}
