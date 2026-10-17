import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/Api/Auth";
import { useAuthStore } from "../Store/use-auth";

function LoginPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return <></>;
}

export default LoginPage;
