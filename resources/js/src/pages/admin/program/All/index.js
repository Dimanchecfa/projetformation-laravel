import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { ButtonInfo, ButtonPrimary } from "../../../../components/button";
import PageHeaders from "../../../../layouts/components/header";

const AllProgram = () => {
    return (
        <>
            <div className="row offset-1">
                <div className="col-3">
                    <h1 class="h3 mb-5">
                        <strong>Listes des </strong> programmes
                    </h1>
                </div>
                <div className="offset-7 col-2">
                    <ButtonPrimary route="/admin/programme/create">
                        Ajouter
                    </ButtonPrimary>
                </div>
            </div>

            <div class="row offset-1 mt-3">
                <div class="col-4 col-md-4 col-sm-12">
                    <div class="card">
                        <img
                            class="card-img-top"
                            src="https://www.ebp-paris.com/wp-content/uploads/2021/02/ebp-44-690x460.jpg"
                            alt="Unsplash"
                        />
                        <div class="card-header">
                            <h5 class="card-title mb-0">Editer</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <div
                                className="d-flex
                            justify-content-between"
                            >
                                <ButtonPrimary route="/admin/programme/edit">
                                    Editer{" "}
                                </ButtonPrimary>

                                <ButtonInfo route="/admin/programme/show">
                                    Voir
                                </ButtonInfo>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-md-4 col-sm-12">
                    <div class="card">
                        <img
                            class="card-img-top"
                            src="https://www.ebp-paris.com/wp-content/uploads/2021/02/ebp-44-690x460.jpg"
                            alt="Unsplash"
                        />
                        <div class="card-header">
                            <h5 class="card-title mb-0">
                                Card with image and button
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <div
                                className="d-flex
                            justify-content-between"
                            >
                                <ButtonPrimary route="/admin/programme/edit">
                                    Editer{" "}
                                </ButtonPrimary>

                                <ButtonInfo route="/admin/programme/show">
                                    Voir
                                </ButtonInfo>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-md-4 col-sm-12">
                    <div class="card">
                        <img
                            class="card-img-top"
                            src="https://www.ebp-paris.com/wp-content/uploads/2021/02/ebp-44-690x460.jpg"
                            alt="Unsplash"
                        />
                        <div class="card-header">
                            <h5 class="card-title mb-0">
                                Card with image and button
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <div className="d-flex
                            justify-content-between">
                            
                                <ButtonPrimary route="/admin/programme/edit">Editer{" "}</ButtonPrimary>
							
							    <ButtonInfo route="/admin/programme/show">Voir</ButtonInfo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProgram;
