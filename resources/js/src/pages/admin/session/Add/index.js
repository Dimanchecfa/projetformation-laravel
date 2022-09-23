import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { BackButton, ButtonPrimary } from "../../../../components/button";
import { convertNewValue } from "../../../../utilities/helper";

const AddSession = () => {
    const [age, setAge] = useState("");
    const [value, setValue] = useState("2021-01-01");
    const [debut , setDebut] = useState("");
    const [fin , setFin] = useState("")

    const handleChange = (event) => {
        setAge(event.target?.value);
    };
    const handleChangeDebut = (newValue) => {
        setDebut(debut);
        console.log(debut);
    }
    const handleChangeFin = (newValue) => {
        setFin(fin);
    }

    const onChange = (newValue) => {
        const date = convertNewValue(newValue);
        console.log(date);
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

            <div className="row offset-1">
                <div className="col-8 col-md-8 col-sm-12 offset-1">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Programme</h5>
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
                            <div className="mb-3">
                                <InputLabel id="demo-simple-select-label">
                                    Formation
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Nom de la formation"
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </div>
                            <div className="mb-3">
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DesktopDatePicker
                                        label="Date de la seance"
                                        inputFormat="MM/DD/YYYY"
                                        value={value}
                                        onChange={onChange}
                                        renderInput={(params) => (
                                            <TextField
                                                size="small"
                                                fullWidth
                                                {...params}
                                            />
                                        )}
                                    />
                                    <div className="mt-3">
                                        <TimePicker
                                            label="Heure de debut"
                                            value={debut}
                                            onChange={handleChangeDebut}
                                            renderInput={(params) => (
                                                <TextField
                                                size="small"
                                                fullWidth
                                                {...params} />
                                            )}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <TimePicker
                                            label=""
                                            value={fin}
                                            onChange={handleChangeFin}
                                            renderInput={(params) => (
                                                <TextField
                                                size="small"
                                                fullWidth
                                                {...params} />
                                            )}
                                        />
                                    </div>
                                </LocalizationProvider>
                            </div>

                            <div className="mt-5 offset-9">
                                <ButtonPrimary>Enregistrer</ButtonPrimary>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddSession;
