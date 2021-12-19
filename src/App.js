import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import {
  H1text,
  Ptext,
  Icon,
  Input,
  BoxDescription,
  Loading,
  Error,
} from "./components";
const App = () => {
  const [theme, setTheme] = useState("Light");
  const [iconTheme, setIconTheme] = useState("fas fa-moon");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const [bodyJson, setBodyJson] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearch(true);
    fetch(`https://api.github.com/users/${user}`)
      .then((respon) => respon.json())
      .then((responBody) => {
        if (responBody.message === "Not Found") {
          setError(true);
          setLoading(false);
          setSearch(false);
          setTimeout(() => {
            setError(false);
          }, 3000);
        } else {
          setBodyJson(responBody);
          setLoading(false);
        }
      });
    setUser("");
  };
  const handleInput = (e) => {
    setUser(e.target.value);
  };

  const handleTheme = () => {
    const body = document.getElementById("body");
    if (body.classList[0] !== "Dark") {
      setIconTheme("fas fa-sun");
      setTheme("Dark");
      body.classList.remove("Light");
      body.classList.add("Dark");
      localStorage.setItem("theme", "Dark");
    } else {
      setTheme("Light");
      setIconTheme("fas fa-moon");
      body.classList.remove("Dark");
      body.classList.add("Light");
      localStorage.removeItem("theme");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const body = document.getElementById("body");
      body.classList.remove("Light");
      setIconTheme("fas fa-sun");
      setTheme("Dark");
      body.classList.add(localStorage.getItem("theme"));
    }
    return false;
  });

  const ShowInfo = () => {
    if (!search) {
      return false;
    } else if (loading) {
      return <Loading className="Loading" />;
    }
    return (
      <BoxDescription
        className="Content"
        src={bodyJson.avatar_url}
        alt={bodyJson.name}
        fullName={bodyJson.name}
        userName={bodyJson.login}
        createdDate={new Date(bodyJson.created_at).toDateString()}
        infoUser={bodyJson.bio}
        repos={bodyJson.public_repos}
        followers={bodyJson.followers}
        following={bodyJson.following}
        location={bodyJson.location}
        web={bodyJson.blog}
        twitter={bodyJson.twitter_username}
        company={bodyJson.company}
      />
    );
  };

  return (
    <main className="Main">
      <header className="Header">
        <H1text className="Title" numH={1} text="FindProgrammer" />
        <div className="Div__theme" onClick={handleTheme}>
          <Ptext text={theme === "Light" ? "DARK" : "LIGHT"} />
          <Icon className={iconTheme} />
        </div>
      </header>
      <form className="Form" onSubmit={handleSubmit}>
        <Icon className="fas fa-search Form__icon-search" />
        <Input
          className="Form__input-search"
          type="text"
          placeholder="Search Dev Github... "
          handleInput={handleInput}
          value={user}
        />
        <Input className="Form__btn-search" type="submit" value="Search" />
      </form>
      <Error error={error} />
      <ShowInfo />
    </main>
  );
};
export default App;
