import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    fetch("http://localhost:4000/users/me")
      .then((res) => res.json())
      .then((json) => setUser(json));
  });

  if (!user) return <>Loading...</>;
  return (
    <>
      <h2>{user.name}</h2>
    </>
  );
};

export default Home;
