import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../media/logo/logo.svg"
import "./Menu.css";

import HomeIconFill from "../../media/icons/item_home_icon_fill.svg";
import ConectionsIconFill from "../../media/icons/item_conections_icon_fill.svg";
import CoursesIconFill from "../../media/icons/item_cursos_icon_fill.svg";
import MomentsIconFill from "../../media/icons/item_moments_icon_fill.svg";
import HomeIconStroke from "../../media/icons/item_home_icon_stroke.svg";
import ConectionsIconStroke from "../../media/icons/item_conections_icon_stroke.svg";
import CoursesIconStroke from "../../media/icons/item_cursos_icon_stroke.svg";
import MomentsIconStroke from "../../media/icons/item_moments_icon_stroke.svg";
import ChatIcon from "../../media/icons/item_chat_icon_fill.svg";
import NotificationsIcon from "../../media/icons/item_alert_icon_fill.svg";
import MenuIcon from "../../media/icons/item_menu_icon.svg";

const Menu = props => {
    return (
        <div className="Menu">
            <nav className="header_main">
                <div className="container_max">
                    <div className="container_left">
                        <img src={Logo} width="45px" />
                        <input type="text" placeholder="Pesquisar..." className="search_bar" />
                    </div>

                    <div className="container_middle">
                        <ul className="nav">
                            <li><Link to="/"><img src={props.atual === "Home" ? HomeIconFill : HomeIconStroke} alt="Ícone da página moments" className="nav_icon"/>{/*<svg aria-label="Home" className="_8-yf5 " fill="#fff" height="25" role="img" viewBox="0 0 28 28"><path xmlns="http://www.w3.org/2000/svg" d="M27.8,15.24c-.4,1.03-1.31,1.66-2.39,1.66h-.67v8.28c0,1.56-1.22,2.82-2.71,2.82h-5.68v-8.19c0-.27-.21-.49-.47-.49h-3.77c-.26,0-.47,.21-.47,.49v8.19H5.96c-1.49,0-2.71-1.26-2.71-2.82v-8.28h-.67c-1.07,0-1.99-.64-2.39-1.66-.4-1.03-.18-2.15,.59-2.92L12.2,.76c1.01-1.02,2.59-1.02,3.6,0l11.42,11.56c.77,.77,.99,1.89,.59,2.92Z" /></svg>*/}</Link></li>
                            <li><Link to="/conexoes"><img src={props.atual === "Conexoes" ? ConectionsIconFill : ConectionsIconStroke} alt="Ícone da página moments" className="nav_icon"/>{/*<svg aria-label="Home" className="_8-yf5 " fill="#fff" height="25" role="img" viewBox="0 0 36 28"><g xmlns="http://www.w3.org/2000/svg"><g><g><path d="M18.87,6.51c0,3.59-2.92,6.52-6.51,6.52c-3.59,0-6.52-2.92-6.52-6.52C5.84,2.92,8.76,0,12.36,0     C15.95,0,18.87,2.92,18.87,6.51z" /></g><g><path d="M24.01,26.19C23.26,27.33,21.99,28,20.62,28H4.1c-1.36,0-2.63-0.67-3.4-1.81c-0.76-1.14-0.91-2.57-0.39-3.84     c2-4.93,6.74-8.12,12.06-8.12c5.32,0,10.06,3.19,12.06,8.12C24.93,23.63,24.78,25.06,24.01,26.19z" /></g></g><g><path d="M30.93,8.67c0,2.96-2.41,5.37-5.37,5.37c-2.97,0-5.37-2.41-5.37-5.37c0-2.97,2.41-5.38,5.37-5.38    C28.52,3.29,30.93,5.71,30.93,8.67z" /></g><g><path d="M35.62,22.62c0,0.67-0.2,1.35-0.59,1.93c-0.64,0.95-1.7,1.51-2.85,1.51h-5.8c-0.24,0-0.47-0.11-0.61-0.31    c-0.14-0.2-0.18-0.45-0.11-0.68c0.25-0.77,0.23-1.63-0.05-2.39c-0.86-2.36-2.29-4.42-4.11-5.96c-0.2-0.17-0.31-0.44-0.26-0.7    c0.05-0.26,0.23-0.48,0.48-0.58c1.23-0.48,2.51-0.72,3.83-0.72c4.33,0,8.18,2.6,9.82,6.61C35.54,21.74,35.62,22.18,35.62,22.62z" /></g></g></svg>*/}</Link></li>
                            <li><Link to="/cursos"><img src={props.atual === "Cursos" ? CoursesIconFill : CoursesIconStroke} alt="Ícone da página moments" className="nav_icon"/></Link></li>
                            <li><Link to="/moments"><img src={props.atual === "Moments" ? MomentsIconFill : MomentsIconStroke} alt="Ícone da página moments" className="nav_icon"/></Link></li>
                        </ul>
                    </div>

                    {props.logged ?
                        <div className="container_right_expand">
                            <div className="dropdown">
                                <button type="button" className="btn-action btn-menu-expand"><img className="btn-icon menu-expand-ico" src={MenuIcon} alt="ícone de Menu"/></button>

                                <div className="dropdown-content">
                                    <Link className="user-profile_btn" to="/perfil">
                                        <img style={{border: "1px solid white"}} src="https://media-exp1.licdn.com/dms/image/C4E03AQEMFO6yMCYjaQ/profile-displayphoto-shrink_200_200/0/1639491349201?e=1657756800&v=beta&t=V730pyqkTDzfhiWDYOPdleupWPRpv1WFUbm3AQh8fnY"/>
                                    </Link>
                                    <button type="button" className="btn-action btn-chat"><img className="btn-icon" src={ChatIcon} alt="ícone de chat"/></button>
                                    <button type="button" className="btn-action btn-notifications"><img className="btn-icon" src={NotificationsIcon} alt="ícone de Notificações"/></button>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                    }

                    {props.logged ?
                        //logado
                        <div className="container_right logged">
                            <Link className="user-profile_btn" to="/perfil">
                                <div>
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEMFO6yMCYjaQ/profile-displayphoto-shrink_200_200/0/1639491349201?e=1657756800&v=beta&t=V730pyqkTDzfhiWDYOPdleupWPRpv1WFUbm3AQh8fnY"/>
                                    <p>Alini</p>
                                </div>
                            </Link>

                            <button type="button" className="btn-action btn-chat"><img className="btn-icon" src={ChatIcon} alt="ícone de chat"/></button>
                            <button type="button" className="btn-action btn-notifications"><img className="btn-icon" src={NotificationsIcon} alt="ícone de Notificações"/></button>
                        </div>
                        :

                        //não logado
                        <div className="container_right not-logged">
                            <ul className="login_control">
                                <li><Link to="/login" className="sing-in_btn">Login</Link></li>
                                <li><Link className="sign-up_btn" to="/cadastro">Cadastro</Link></li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        </div>
    );
}

export default Menu;