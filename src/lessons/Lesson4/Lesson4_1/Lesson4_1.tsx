import { useState } from "react";
import { useAuth } from "./context/AuthContext";

const Lesson4_1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, user, logout } = useAuth();

  // ログアウト時に入力欄もクリアする
  const handleLogout = () => {
    logout();
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    login({ id: "1", username, password });
  };

  return (
    <div>
      {user ? (
        <div>
          <p>ログイン済み:</p>
          <button onClick={handleLogout}>ログアウト</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>ログイン</button>
        </div>
      )}
    </div>
  );
};

export default Lesson4_1;
