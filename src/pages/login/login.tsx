import React from "react";
import LoginUser from "../../components/login/bodyLogin/body";
import { BodyLogin } from "../../components/login/bodyLogin/styles";
import Header from "../../components/login/headerLogin/headerLogin"
export default function Login () {
    return(
        <BodyLogin>
            <Header/>
            <LoginUser/>
        </BodyLogin>
    );
}