import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { BackButton, ButtonPrimary } from "../../../../components/button";

const AddTraining = () => {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className="row offset-1">
                <div className="col-3">
                    <h1 class="h3 mb-5">Ajout d'une formation</h1>
                </div>
                <div className="offset-md-7 col-md-2  ">
                    <BackButton route="/admin/training">Retour</BackButton>
                </div>
            </div>

            <div className="row offset-1">
                <div className="col-8 col-md-8 col-sm-12 offset-1">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Formation</h5>
                        </div>
                        <div class="card-body">
                            <div className="mb-3">
                                <InputLabel id="demo-simple-select-label">
                                    Programme
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Nom du programme"
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                >

                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </div>
                            <div className="mb-2">
                                <TextField
                                    id="outlined-basic"
                                    label="Nom de la formation"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                />
                            </div>
                            <div className="mb-3">
                                <div class="form-group">
                                    <input
                                        class="form-control"
                                        type="file"
                                        id="formFile"
                                        placeholder="Ajouter une image"
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </div>
                            <div className="mt-5 offset-9">
                                <ButtonPrimary route={"/admin/formation"}>
                                    Enregistrer
                                </ButtonPrimary>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddTraining;
