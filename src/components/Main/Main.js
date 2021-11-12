import { useState, useEffect } from "react";


function Main() {

    // card number state
    const [cardNumber, setCardNumber] = useState([]);

    //states for the card flags

    const [ccVisa, setCCVisa] = useState(false);
    const [ccMaster, setCCMaster] = useState(false);
    const [ccAmex, setCCAmex] = useState(false);

    // states for invalid card number

    const [invalidCard, setInvalidCard] = useState(false);


    // get the data from the form
    const handleCardNumber = (ccNumberInput) => {
        setCardNumber(ccNumberInput.target.value);
    }

    useEffect(() => {
        if (cardNumber[0] === "5") {
            setCCMaster(true);
            setInvalidCard(false);
        } else if (cardNumber[0] === "4") {
            setCCVisa(true);
            setInvalidCard(false);
        } else if (cardNumber[0] === "3") {
            setCCAmex(true);
            setInvalidCard(false);
        }
        else {
            setCCVisa(false);
            setCCMaster(false);
            setCCAmex(false);
            if (cardNumber.length > 0) {
                setInvalidCard(true);
            } else {
                setInvalidCard(false);
            }

        }
    }, [cardNumber]);

    return (
        <>
            <section>
                <div className="app-base">

                    <div className={
                        ccVisa ? "cc-base visa-color" :
                            ccMaster ? "cc-base  mastercard-color" :
                                ccAmex ? "cc-base  amex-color" :
                                    invalidCard ? "cc-base  animate__animated animate__shakeX cc-invalid-card" :
                                        "cc-base animate__animated animate__fadeIn "
                    }>
                        <div className="cc-number">
                            <input placeholder="digite os números do seu cartão" className="cc-input" name="cardNumber" value={cardNumber} onChange={handleCardNumber} type="text" />
                            {invalidCard ? <p className="cc-invalid-info">cartão inválido ou não aceito</p> : null}
                        </div>
                        <div className="cc-name">John Doe</div>
                        <div className="cc-val">04/25</div>
                        <div className="cc-cvv-date">
                            <div>428</div>
                            <div className="cc-flag">
                                {
                                    ccVisa ?
                                        <div className="animate__animated animate__fadeIn">
                                            <img src="img/visa_cc_alt.png" alt="visa" />
                                        </div> :
                                        ccMaster ?
                                            <div className="animate__animated animate__fadeIn">
                                                <img src="img/mc_cc.png" alt="mastercard" />
                                            </div> :
                                            ccAmex ?
                                                <div className="animate__animated animate__fadeIn">
                                                    <img src="img/amex_cc.png" alt="amex" />
                                                </div> :
                                                ""
                                }
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Main;