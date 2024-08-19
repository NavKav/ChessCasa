import './Popup.css';

export const Popup = ({ functionToCall }) => {
    const handleAddActive = () => {
        document.body.classList.add('active');
    };

    const handleRemoveActive = () => {
        document.body.classList.remove('active');
    };

    functionToCall();  // Cette fonction est appelée dès que le composant est rendu.

    return (
        <>
            <div className="overlay"></div>
            <div className="wrapper">
                <div className="popup">
                    <div className="popup-inside">
                        <div className="backgrounds">
                            <div className="background"></div>
                            <div className="background background2"></div>
                            <div className="background background3"></div>
                            <div className="background background4"></div>
                            <div className="background background5"></div>
                            <div className="background background6"></div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-wrapper">
                            <h1>MERCI</h1>
                            <p>Le résultat a été enregistré avec succès.</p>
                            <p className="try-again" onClick={handleRemoveActive}>OK</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
