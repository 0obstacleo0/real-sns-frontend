import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <div className="loginDesc">本格的なSNSを、自分の手で。</div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">新規登録はこちら</p>
            <input
              type="text"
              className="loginInput"
              placeholder="ユーザー名"
            />
            <input type="text" className="loginInput" placeholder="Eメール" />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
            />
            <input
              type="password"
              className="loginInput"
              placeholder="確認用パスワード"
            />
            <button className="loginButton">サインアップ</button>
            <button className="loginRegisterButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  );
}
