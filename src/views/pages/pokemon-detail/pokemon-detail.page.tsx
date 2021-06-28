import { FC, useState } from "react";
import { Modal } from "../../components";
import { ToastContainer } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import { usePokemonDetailPageStyle } from "./pokemon-detail.style";
import { PokemonDetailContainer, PokemonDetailForm } from "../../containers/pokemon-details";

export const PokemonDetailPage: FC = () => {
    const { location } = useHistory();
    const { name } = useParams<{ name: string }>();
    const { Div } = usePokemonDetailPageStyle();
    const [showModal, setShowModal] = useState(false);

    return (
        <Div>
            {showModal && (
                <Modal>
                    <PokemonDetailForm
                        name={name}
                        artwork={location.state as string}
                        setShowModal={setShowModal}
                    />
                </Modal>
            )}
            <PokemonDetailContainer
                setShowModal={setShowModal}
                name={name}
                artwork={location.state as string}
            />
            <ToastContainer />
        </Div>
    );
};
