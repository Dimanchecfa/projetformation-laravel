import { Card, Col, Row } from "react-bootstrap";
import { BackButton, ButtonDanger, ButtonPrimary } from "../../../../components/button";
import { LockIcon, UserIcon } from "../../../../components/icons";

const ShowUser = () => {
    return (
        <>
            <div className="row offset-md-1">
                <div className="col-3">
                    <h1 class="h4 mb-5">
                        <strong>Information de </strong> l'utilisateur
                    </h1>
                </div>
                <div className=" offset-7 col-1">
                    <BackButton >
                        Retour
                    </BackButton>
                </div>
                <div className="col-1">
                    <ButtonDanger >
                        Verouiller
                    </ButtonDanger>
                </div>
            </div>
            <Row>
                <Col sm={12} md={{ span: 5, offset: 1 }}>
                    <div class="card mb-3">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Profile Details</h5>
                        </div>
                        <div class="card-body text-center ">
                            <img
                                src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Profile-128.png"
                                alt="Christina Mason"
                                class="img-fluid rounded-circle mb-2 offset-4"
                                width="128"
                                height="128"
                            />
                            <div>
                                <h5 class="card-title mb-0 h3">
                                    Christina Mason
                                </h5>
                                <div class="text-muted mb-2 h3">
                                    Lead Developer
                                </div>
                            </div>
                            <div class="col-6 offset-3">
                                <button class="btn btn-success btn-sm d-flex align-items-center h2 offset-2">
                                    <LockIcon /> Compte accessible
                                </button>
                            </div>
                        </div>
                        <hr class="my-0" />
                    </div>
                </Col>
                <Col sm={12} md={{ span: 6 }}>
                    <Card body>
                        <Card.Header>
                            <h5>
                                <strong>Information sur l'utilisateur</strong>
                            </h5>
                        </Card.Header>
                        <hr />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ShowUser;
