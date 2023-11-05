import React, { useState } from "react";
import axios from "axios";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handlePasswordChange = () => {
    // Kullanıcının oturum açtıktan sonra tokenını userToken değişkenine tanımla
    const userToken = JSON.parse(localStorage.getItem("user")).auth_token;

    const data = {
      new_password: newPassword,
      re_new_password: reNewPassword,
      current_password: currentPassword,
    };

    axios
      .post("http://localhost:8000/api/v1/users/set_password/", data, {
        headers: {
          Authorization: `Token ${userToken}`, 
          "Content-Type": "application/json", 
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setSuccess("Şifre değiştirme başarılı!");
          setError(null);
          console.log("BAŞARILI !!!!")
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Django REST framework hata detayı:", error.response.data);
          setError(error.response.data.detail);
          setSuccess(null);
        } else {
          setError("Şifre değiştirme sırasında bir hata oluştu.");
          setSuccess(null);
        }
      });
  };

  return (
    <div>
      <h1>Şifre Değiştirme</h1>
      <div>
        <label>Current Password:</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Re-enter New Password:</label>
        <input
          type="password"
          value={reNewPassword}
          onChange={(e) => setReNewPassword(e.target.value)}
        />
      </div>
      <button onClick={handlePasswordChange}>Şifre Değiştir</button>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </div>
  );
}

export default ChangePassword;
