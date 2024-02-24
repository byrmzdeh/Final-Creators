import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.scss'
import { BasketContext } from "../../context/BasketContex";



const Checkout = () => {
    const navigate = useNavigate();
    const [inputGroup] = useState([

        {
            label: "first_name",
            value: "",
        },
        {
            label: "last_name",
            value: "",
        },
        {
            label: "company_name",
            value: "",
        },
        {
            label: "adress_name",
            value: "",
        },

        {
            label: "town_name",
            value: "",
        },

        {
            label: "state_name",
            value: "",
        },

        {
            label: "postcode",
            value: "",
        },

        {
            label: "email_adress",
            value: "",
        },

        {
            label: "phone",
            value: "",
        },
    ]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [baskett, setBaskett] = useState([]);

    useEffect(() => {
        const total = baskett.reduce((acc, item) => {
            return acc + item.count * item.discount;
        }, 0);

        setTotalPrice(total);
    }, [baskett]);


    const setInputDataToState = (label, sendData) => {
        for (let i = 0; i < inputGroup.length; i++) {
            if (inputGroup[i].label === label) {
                inputGroup[i].value = sendData;
            }
        }
    };

    const [validation, setValidation] = useState("")
    const { basket } = useContext(BasketContext)

    const checkAllInputs = (inputs) => {

        const emptyInputs = inputs.filter((item) => item.value.length === 0);
        if (emptyInputs.length !== 0) {
            var validationText = "Fill the "
            emptyInputs.map((input) => {
                validationText = validationText + input.label + " , "
            })
            setValidation(validationText)
        } else {
            navigate("/")
        }
    }

    console.log(inputGroup.filter((item) => item.length === 0));



    return (
        <div className="checkout">
            <div className="details">
                <h3>Billing Details</h3>
                <p >{validation}</p>
                <hr />
                <form>
                    <div >
                        <label>
                            Country 'Ölkə
                            <span className="required">*</span>
                        </label>
                        <select className="form-control">
                            <option value={5}> United Arab Emirates 'Birləşmiş Ərəb Əmirlikləri</option>
                            <option value={1}>China 'Çin</option>
                            <option value={2}>United Kingdom 'Birləşmiş Krallıq</option>
                            <option value={0}>Germany 'Almaniya</option>
                            <option value={3}>France 'Fransa</option>
                            <option value={4}>Japan 'Yaponiya</option>
                        </select>
                    </div>
                    <div >
                        <label>
                            First Name 'Ad
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            onChange={(e) =>
                                setInputDataToState("first_name", e.target.value)
                            }
                        />
                    </div>
                    <div >
                        <label>
                            Last Name 'Soyad
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="surname"
                            onChange={(e) =>
                                setInputDataToState("last_name", e.target.value)
                            }
                        />
                    </div>
                    <div >
                        <label>Company Name 'Şirkət Adı</label>
                        <input
                            type="text"
                            id="company"
                            onChange={(e) =>
                                setInputDataToState("company_name", e.target.value)
                            }
                        />
                    </div>
                    <div >
                        <label>
                            Address 'Adres
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="address"
                            onChange={(e) =>
                                setInputDataToState("adress_name", e.target.value)
                            }
                        />
                    </div>
                    <div >
                        <label>
                            Town / City 'Şəhər
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="city"
                            onChange={(e) =>
                                setInputDataToState("town_name", e.target.value)
                            }
                        />
                    </div>
                    <div >
                        <label>
                            State / County 'Ştat
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="state"
                            onChange={(e) =>
                                setInputDataToState("state_name", e.target.value)
                            }
                        />
                    </div>
                    <div >
                        <label>
                            Postcode / Zip 'Post Kodu
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="zip"
                            onChange={(e) =>
                                setInputDataToState("postcode", e.target.value)
                            }
                        />
                    </div>
                    <div >
                        <label>
                            Email Address 'Mail Adresi
                            <span className="required">*</span>
                        </label>

                        <input
                            type="email"
                            id="email"
                            onChange={(e) =>
                                setInputDataToState("email_adress", e.target.value)
                            }
                        />
                    </div>
                    <div >
                        <label>
                            Phone 'Telefon
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="phone"
                            onChange={(e) =>
                                setInputDataToState("phone", e.target.value)
                            }
                        />
                    </div>
                </form>
            </div>
            <div className="order">
                <h3 className="title">Your Order </h3>
                <hr />
                <table>
                    <thead>
                        {basket.map((item) => (
                            <tr key={item.id}>
                                <th>PRODUCT NAME: {item.name}</th>
                                <th>TOTAL: {item.count * item.discount} $</th>
                            </tr>
                        ))}
                    </thead>
                </table>
                <div>
                    <p>Total Price: {totalPrice} $</p>
                </div>
                <button onClick={() => checkAllInputs(inputGroup)}>
                    PLACE ORDER
                </button>
            </div>
        </div>
    );
}


export default Checkout;