import { styled } from "styled-components";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegação iconeAtivo>

                    </ItemNavegação>
                </ListaEstilizada>
            </nav>
        </aside>
    );
}

export default BarraLateral;