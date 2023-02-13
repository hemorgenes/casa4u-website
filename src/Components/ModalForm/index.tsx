import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import ReactLoading from "react-loading";

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Checkbox } from "@nextui-org/react";
import { useModalForm } from "../../contexts/ModalFormContext";
import SuccessFeedback from "./SuccessFeedback";

Modal.setAppElement(".contextModal");

type CityProps = {
  id: number;
  nome: string;
};

type DataForm = {
  name: string;
  email: string;
  number: string;
  city: string;
  place: string;
  idea: string;
  recaptcha: string;
};

type PlaceProps = {
  name: string;
  amount: number;
};

function ModalForm() {
  const isLoading = useModalForm((state) => state.isLoading);
  const setIsLoading = useModalForm((state) => state.setIsLoading);
  const modalIsOpen = useModalForm((state) => state.modalIsOpen);
  const setModalIsOpen = useModalForm((state) => state.setModalIsOpen);
  const isSuccessSendForm = useModalForm((state) => state.isSuccessSendForm);

  const isMoreThanOnePlace = useModalForm((state) => state.isMoreThanOnePlace);
  const setIsMoreThanOnePlace = useModalForm(
    (state) => state.setIsMoreThanOnePlace
  );
  const setIsSuccessSendForm = useModalForm(
    (state) => state.setIsSuccessSendForm
  );

  const [numberWithMask, setNumberWithMask] = useState("");
  const [valueRecaptcha, setValueRecaptcha] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string>("");

  const [cities, setCities] = useState<CityProps[]>([]);
  const [places, setPlaces] = useState<PlaceProps[]>([]);

  const { register, handleSubmit, reset } = useForm();

  let lengthNumber: string;

  const placesNames = [
    "Quarto",
    "Cozinha",
    "Sala de estar",
    "Office",
    "Lavabo",
    "Outros",
  ];

  //get cities and get places
  useEffect(() => {
    const getCities = async () => {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/distritos"
      );
      const data = await response.json();
      const dataOrderByName = data.sort(function (a: CityProps, b: CityProps) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
      });
      setCities(dataOrderByName);
    };
    getCities();

    const placesWithAmount: PlaceProps[] = placesNames.map((item) => {
      return {
        name: item,
        amount: 0,
      };
    });
    setPlaces(placesWithAmount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleValueRecaptcha(value: any) {
    setValueRecaptcha(value);
  }

  const addMaskForNumber = (e: any) => {
    if (lengthNumber > e.target.value.length) {
      lengthNumber = e.target.value.length;
      return;
    } else {
      if (e.target.value.length == 1) {
        e.target.value = "(" + e.target.value;
      }
      if (e.target.value.length == 3) {
        e.target.value = e.target.value + ")";
      }
      if (e.target.value.length == 4) {
        e.target.value = e.target.value + " ";
      }
      if (e.target.value.length == 10) {
        e.target.value = e.target.value + "-";
      }
      lengthNumber = e.target.value.length;
    }
    setNumberWithMask(e.target.value);
  };

  const handleRequestDataForm = async (data: any) => {
    if (valueRecaptcha !== null) {
      handleSendToEmail(data);
    } else {
      console.log("recaptcha invalido");
      setMessageError("Preencha o ReCAPTCHA");
    }
  };

  const handleSendToEmail = (data: DataForm) => {
    setIsLoading(true);
    let messagePlaces;
    if (isMoreThanOnePlace) {
      messagePlaces = places
        .map((item) => `${item.name} - ${item.amount}`)
        .join(" | ");
    } else {
      messagePlaces = data.place;
    }

    emailjs
      .send(
        "service_zz7kn4g",
        "template_jfo1pdq",
        {
          name: data.name,
          email: data.email,
          number: numberWithMask,
          city: data.city,
          place: messagePlaces,
          idea: data.idea,
        },
        `${process.env.NEXT_PUBLIC_EMAIL_TOKEN}`
      )
      .then(() => {
        setIsSuccessSendForm(true);
        reset(undefined, {
          keepValues: false,
        });
        setIsMoreThanOnePlace(false);
      })
      .catch(() =>
        alert(
          "Houve algum erro interno, entre em contato com o suporte técnico da Casa4U"
        )
      );
  };

  const closeModal = () => {
    setIsSuccessSendForm(false);
    setIsLoading(false);
    setModalIsOpen(false);
    reset(undefined, {
      keepValues: false,
    });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={"Example my modal"}
        overlayClassName={styles.overlay}
        className={`${styles.content} ${modalIsOpen ? `${styles.show}` : ""} `}
      >
        {isSuccessSendForm ? (
          <SuccessFeedback />
        ) : (
          <>
            <section className={styles.text}>
              <h1>Quer projetar ou remodelar seu ambiente?</h1>
              <span>
                Preencha o formulário e em breve um de nossos consultores
                entrará em contato com você.
              </span>
            </section>

            <form
              className={styles.form}
              onSubmit={handleSubmit(handleRequestDataForm)}
            >
              {/* NAME */}
              <div className={styles.input}>
                <label htmlFor="nome">
                  Nome <p style={{ color: "red" }}>*</p>
                </label>
                <input id="nome" {...register("name")} required type="text" />
              </div>

              {/* EMAIL */}
              <div className={styles.input}>
                <label htmlFor="email">
                  Email <p style={{ color: "red" }}>*</p>
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  required
                />
              </div>

              {/* NUMBER */}
              <div className={styles.input}>
                <label htmlFor="number">
                  Número <p style={{ color: "red" }}>*</p>
                </label>
                <input
                  pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
                  maxLength={15}
                  onChange={(e) => addMaskForNumber(e)}
                  id="number"
                  type="tel"
                  required
                />
              </div>

              {/* CITY */}
              <div className={styles.input}>
                <label htmlFor="city">
                  Cidade <p style={{ color: "red" }}>*</p>
                </label>
                <select id="city" required {...register("city")}>
                  <option value="" hidden>
                    Escolha a cidade
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.nome}>
                      {city.nome}
                    </option>
                  ))}
                </select>
                <span
                  style={{
                    display: "block",
                    color: "#a0a0a0",
                    padding: "8px",
                    fontSize: "12px",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  Apenas cidades e distritos de São Paulo
                </span>
              </div>

              {/* CHECKBOX */}
              <div className={styles.containerCheckBox}>
                <Checkbox
                  defaultSelected={isMoreThanOnePlace}
                  onChange={(checked: boolean) => {
                    setIsMoreThanOnePlace(checked);
                  }}
                />
                <span>Mais de um ambiente</span>
              </div>

              {/* PLACE */}
              {isMoreThanOnePlace ? (
                <section className={styles.containerTwoInputs}>
                  {places.map((item) => (
                    <div key={item.name}>
                      <div className={`${styles.input}`}>
                        <label htmlFor="ambiente">
                          {item.name}
                          <p style={{ color: "red" }}></p>
                        </label>
                        <div className={styles.twoInputs}>
                          <input
                            className={styles.input}
                            type="number"
                            onChange={(e) => {
                              const newArr = places.map((place) => {
                                if (item.name == place.name) {
                                  return {
                                    name: item.name,
                                    amount: parseInt(e.target.value),
                                  };
                                } else {
                                  return {
                                    name: place.name,
                                    amount: place.amount,
                                  };
                                }
                              });

                              setPlaces(newArr);
                            }}
                            defaultValue={0}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              ) : (
                <div className={styles.input}>
                  <label htmlFor="ambiente">
                    Parte do ambiente <p style={{ color: "red" }}>*</p>
                  </label>
                  <select
                    id="ambiente"
                    required={isMoreThanOnePlace == false}
                    {...register("place")}
                  >
                    <option value="" hidden>
                      Escolha um ambiente
                    </option>
                    {placesNames.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* IDEA */}
              <div className={styles.input}>
                <label htmlFor="ideia">
                  Me conte suas ideias <p style={{ color: "red" }}>*</p>
                </label>
                <textarea id="idea" required {...register("idea")} />
              </div>

              <ReCAPTCHA
                size="normal"
                sitekey={"6LfvAr8iAAAAAA6YH_8ypCw6jHgF7rGjT6N-90S-"}
                onChange={handleValueRecaptcha}
                onExpired={() => setValueRecaptcha(null)}
              />
              <span style={{ color: "#e42424", fontWeight: "normal" }}>
                {messageError}
              </span>
              {!isLoading ? (
                <input className={styles.send} type="submit" value="Enviar" />
              ) : (
                <button className={styles.send}>
                  <ReactLoading width={16} height={16} type="spinningBubbles" />
                </button>
              )}
            </form>
          </>
        )}

        <button className={styles.close} onClick={closeModal}>
          <GrClose color="#000" size={24} />
        </button>
      </Modal>
    </div>
  );
}

export default ModalForm;
