import { AiFillHome } from 'react-icons/ai';
import { FiMusic, FiUsers, FiRadio, FiHeart } from 'react-icons/fi';
import { GiMusicSpell } from 'react-icons/gi';
import NavLink from './NavLink';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link className='app-logo' href='/' >
                <GiMusicSpell />
                <span>GgWpDJ</span>
            </Link>

            <div>
                <h2>Поиск</h2>

                <ul>
                    <li>
                        <NavLink slug=''>
                            <AiFillHome />
                            <span>Главная</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='top_tracks'>
                            <FiMusic />
                            <span>Треки</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='top_artists'>
                            <FiUsers />
                            <span>Артисты</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='radio'>
                            <FiRadio />
                            <span>Радио</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Библиотека</h2>
                <ul>
                    <li>
                        <NavLink slug='favorites'>
                            <FiHeart />
                            <span>Избранное</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;
