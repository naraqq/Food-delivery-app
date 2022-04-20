import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function CreateProfile() {
    const navigate = useNavigate();

    const [imgElement, setImageElement] = useState(false)
    const [visible, setVisible] = useState(false)
    const imgToggler = () => {
        setImageElement(!imgElement)
        setVisible(!visible)
    }
    const navToForgotPassword = () => {
        navigate({
            pathname: "/forgotPassword"
        })
    }
    const navToResigterForm = () => {
        navigate({
            pathname: "/register"
        })
    }
    return (
        <div className='ProfileContainer'>
            <div className='ProfileContainer-div'>
                <h3>нэвтрэх</h3>
                <form action="">
                    <h4>И-мэйл</h4>
                    <input type="text" placeholder='И-мэйл хаягаа оруулна уу. ' />
                    <h4>Нууц үг</h4>
                    <div className='input-div'>
                        <input type={visible === true ? "text" : "password"} placeholder='Нууц үгээ оруулна уу. ' />
                        <button type='button' className='input-div-button' onClick={imgToggler}>
                            {imgElement === true ?
                                <img className='input-div-img' src="images/input-eyes.svg" alt="" />
                                :
                                <img className='input-div-img2' src="images/eye_slash.svg" alt="" />
                            }
                        </button>
                    </div>
                    <div className='profile-form-text'>
                        <a onClick={navToForgotPassword} href='#'>Нууц үгээ мартсан уу.</a>
                    </div>
                </form>
                <button className='profileContainer-button'>НЭВТРЭХ</button>
                <p>эсвэл</p>
                <button onClick={navToResigterForm} className='profileContainer-button'>БҮРТГҮҮЛЭХ</button>
            </div>
        </div>
    );
}

export default CreateProfile;