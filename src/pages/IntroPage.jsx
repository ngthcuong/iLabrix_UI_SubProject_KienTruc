import { useNavigate } from "react-router-dom";

import iLabrixLogo from "../assets/iLibrary.png";
import Button from "../components/Button";
import backgroundImg from "../assets/Background.png";

const IntroPage = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register")
  };

  return (
    <div
      className="flex items-center justify-center h-screen flex-col w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div>
        <img src={iLabrixLogo} alt="iLabrix Logo" style={{height: 300}} />
      </div>
      <div className="flex mt-12 justify-between items-center w-[400px]">
        <Button onClick={handleSignIn}>Sign in</Button>
        <Button
          backgroundColor={"transparent"}
          textColor={"#fff"}
          onClick={handleRegister}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default IntroPage;
