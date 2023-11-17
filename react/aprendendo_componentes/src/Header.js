
import './Header.css';

function Header(props) {
    return (
        <div className='Header'>
            <nav>
                <ul>
                    <li>
                        <button type="button" className={props.texto}>Botao 1</button>
                    </li>
                    <li>
                        <button type="button" className="button">Botao 2</button>
                    </li>
                    <li>
                        <button type="button" className="button">Botao 3</button>
                    </li>
                </ul>

            </nav>

        </div>

    );
}

export default Header;
