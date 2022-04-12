import React, { useState } from 'react';
import { RiNotification3Line } from 'react-icons/ri';
import { FiSearch, FiMenu } from 'react-icons/fi';

const Navigation = ({ openMenu }) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="header">
            <div className="headerContainer">
                <div className="headerContainer__hamburgerMenu" onClick={() => openMenu()}>
                    <i>
                        <FiMenu />
                    </i>
                </div>

                <a href="/#" className="headerContainer__logo">
                    <img src="./logo.png" alt="Logo" />
                </a>

                <div className="headerContainer__searchBox">
                    <form>
                        <input type="text" placeholder="Search..." aria-label="search" />
                        <button>
                            <FiSearch size="1.5rem" />
                        </button>
                    </form>
                </div>

                <div className="headerContainer__right">
                    <button>Create Post</button>
                    <i className="hidden-search">
                        <FiSearch size="1.5rem" />
                    </i>
                    <i>
                        <RiNotification3Line />
                    </i>
                    <span onClick={toggle}>
                        <img src="https://picsum.photos/200" alt="Profile" />
                    </span>
                </div>
            </div>

            <div className={showMenu ? 'dropdown-menu' : 'dropdown-menu-close'}>
                <ul>
                    <li onClick={toggle}>
                        <a href="/profile">
                            <div className="u-name">Alan Nuari</div>
                            <small className="u-name-id">@alannuari</small>
                        </a>
                    </li>
                    <hr />
                    <li onClick={toggle}>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li onClick={toggle}>
                        <a href="/post">Create Post</a>
                    </li>
                    <li onClick={toggle}>
                        <a href="/list">Reading list</a>
                    </li>
                    <li onClick={toggle}>
                        <a href="/settings">Settings</a>
                    </li>
                    <hr />
                    <li onClick={toggle}>
                        <a href="/signout">Sign Out</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navigation;
