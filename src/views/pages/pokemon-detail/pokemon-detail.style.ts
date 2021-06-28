import styled from "@emotion/styled";

export const usePokemonDetailPageStyle = () => {
    const Div = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin-top: 30px;
    `;

    return { Div };
};
