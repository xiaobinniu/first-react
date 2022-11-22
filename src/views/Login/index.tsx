import './login.scss'
import { useState } from 'react'

export default function index() {
    const [left_right, setLeft_right] = useState('left-panel-active')

    const trigle = () => {
        if (left_right === 'left-panel-active') {
            setLeft_right('right-panel-active')
        } else {
            setLeft_right('left-panel-active')
        }
    }

    return (
        <div className="loginPage">
            <div className={`container ${left_right}`}>
                {/* <!-- Sign Up --> */}
                <div className="container__form container--signup">
                    <form action='#' className="form" id="form1">
                        <h2 className="form__title">Sign Up</h2>
                        <input type="text" placeholder="User" className="input" />
                        <input type="email" placeholder="Email" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                        <button className="btn">Sign Up</button>
                    </form>
                </div>

                {/* <!-- Sign In --> */}
                <div className="container__form container--signin">
                    <form action='#' className="form" id="form2">
                        <h2 className="form__title">Sign In</h2>
                        <input type="email" placeholder="Email" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                        <a href="#" className="link">Forgot your password?</a>
                        <button className="btn">Sign In</button>
                    </form>
                </div>

                {/* <!-- Overlay --> */}
                <div className="container__overlay">
                    <div className="overlay">
                        <div className="overlay__panel overlay--left">
                            <button className="btn" id="signIn" onClick={trigle}>Sign In</button>
                        </div>
                        <div className="overlay__panel overlay--right">
                            <button className="btn" id="signUp" onClick={trigle}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
