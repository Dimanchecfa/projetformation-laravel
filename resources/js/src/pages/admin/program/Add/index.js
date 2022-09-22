import { Button, TextField } from "@mui/material";
import React from "react";
import { BackButton } from "../../../../components/button";

const addProgram = () => {
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
                               <TextField
                                    id="outlined-basic"
                                    label="Nom du programme"
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
                            <Button variant="contained">
                                Enregistrer
                            </Button>

                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
        </>
    );
};

export default addProgram;
