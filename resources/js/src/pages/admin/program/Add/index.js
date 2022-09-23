import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { BackButton } from "../../../../components/button";
import { alertClosed, alertPending } from "../../../../components/sweet-alert";
import { errorNotif, successNotif } from "../../../../components/notification";
import { Navigate, useNavigate } from "react-router-dom";
import { formatPropValueToString } from "../../../../api/client";
import { addProgram } from "../../../../api/request";
import { configConsumerProps } from "antd/lib/config-provider";

const addProgramme = () => {
    const navigate = useNavigate();
    const [formRegister, setFormRegister] = useState({
        libelle: "",
        image: "",
        description: "",
    });
    const [errorForm, setErrorForm] = useState({
        libelle: "",
        image: "",
        description: "",
    });
    const [message, setMessage] = useState("");
    const {
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setFormRegister({
            ...formRegister,
            [name]: value,
        });
    };
    const createProgram = () => {
        if (
            formRegister.libelle === "" ||
            formRegister.description === "" ||
            formRegister.image === ""
        ) {
            const _message = "ce champs est obligatoire";
            setErrorForm({
                libelle: !formRegister.libelle ? _message : "",
                description: !formRegister.description ? _message : "",
                image: !formRegister.image ? _message : "",
            });
            return;
        }

        try {
            alertPending("Ajout en cours");
            const response = addProgram(formRegister);
            response.then((res) => {
                if (res.status === 200) {
                    alertClosed();
                    successNotif("Programme ajouté avec succès");
                    navigate("/admin/program");
                    console.log(res);
                }
            }
            );
            
        } catch (error) {
            alertClosed();
            console.log(error);
            let _message = "";
            let _errorForm = {
                libelle: "",
                description: "",
                image: "",
            };
            if (typeof error === "object") {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
                errorNotif("Echec ", error);
            }
            setMessage(_message);
            setErrorForm(_errorForm);
        }
    };

    return (
        <>
            <div className="row offset-1">
                <div className="col-3">
                    <h1 class="h3 mb-5">Ajout d'un programme</h1>
                </div>
                <div className="offset-md-7 col-md-2  ">
                    <BackButton route="/admin/programme">Retour</BackButton>
                </div>
            </div>

            <div className="row offset-2">
                <div className="col-7 col-md-7 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Programme</h5>
                        </div>
                        {message ? (
                            <div>
                                <p className="text-danger">
                                    <small>{message}</small>
                                </p>
                            </div>
                        ) : null}
                        <div class="card-body">
                            <Form onSubmit={handleSubmit(createProgram)}>
                                <div className="mb-3">
                                    <TextField
                                        id="outlined-basic"
                                        label="Nom du programme"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        name="libelle"
                                        value={formRegister.libelle}
                                        onChange={handleChange}
                                    />
                                    {errorForm.libelle ? (
                                        <p className="text-danger">
                                            <small>{errorForm.libelle}</small>
                                        </p>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="file"
                                            id="formFile"
                                            placeholder="Ajouter une image"
                                            value={formRegister.image}
                                            onChange={handleChange}
                                            name="image"
                                        />
                                        {errorForm.image ? (
                                            <p className="text-danger">
                                                <small>{errorForm.image}</small>
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={formRegister.description}
                                        onChange={handleChange}
                                        name="description"
                                    />
                                    {errorForm.description ? (
                                        <p className="text-danger">
                                            <small>
                                                {errorForm.description}
                                            </small>
                                        </p>
                                    ) : null}
                                </div>
                                <div className="mt-5 offset-8">
                                    <Button variant="contained" type="submit">
                                        Enregistrer
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default addProgramme;
