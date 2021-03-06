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

    // setting valid card number
    const [validCard, setValidCard] = useState(false);




    // get the data from the form
    const handleCardNumber = (ccNumberInput) => {
        setCardNumber(ccNumberInput.target.value);
    }

    useEffect(() => {

        // set the card flags using regex
        const visa = new RegExp("^4[0-9]{0,15}$");
        const amex = new RegExp("^3[47][0-9]{0,14}$");
        const master = new RegExp("^5[1-5][0-9]{0,17}$");

        // check if the card number is valid
        if (master.test(cardNumber)) {
            setCCMaster(true);
            setInvalidCard(false);
            if (cardNumber.length >= 16 && cardNumber.length <= 19) {
                setValidCard(true);
            } else {
                setValidCard(false);
            }
        } else if (visa.test(cardNumber)) {
            setCCVisa(true);
            setInvalidCard(false);
            if (cardNumber.length === 16) {
                setValidCard(true);
            } else {
                setValidCard(false);
            }
        } else if (amex.test(cardNumber)) {
            setCCAmex(true);
            setInvalidCard(false);
            setValidCard(true);
            if (cardNumber.length === 16) {
                setValidCard(true);
            } else {
                setValidCard(false);
            }
        }
        else {
            setCCVisa(false);
            setCCMaster(false);
            setCCAmex(false);
            setValidCard(false);
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
                                    invalidCard ? "cc-base animate__animated animate__shakeX cc-invalid-card" :
                                        "cc-base animate__animated animate__fadeIn "
                    }>
                        <div className="cc-number">
                            <input placeholder="digite os n??meros do seu cart??o" className="cc-input" name="cardNumber" value={cardNumber} onChange={handleCardNumber} type="text" />
                            {invalidCard ? <p className="cc-invalid-info">cart??o inv??lido</p> :
                                validCard ? <p className="cc-invalid-info">cart??o v??lido</p> :



                                    null}

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