import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserProfileCard from "./components/UserProfileCard";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthanticated);
  return (
    <>
      <Header />

      {!isAuth && <UserForm />}
      {isAuth&&<UserProfileCard/>}
      <Counter />
    </>
  );
}

export default App;
