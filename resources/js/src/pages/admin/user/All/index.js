import { Card, Table } from "react-bootstrap";
import { ButtonPrimary } from "../../../../components/button";

const AllUser = () => {
    return (  
        <>
        <div className="row offset-1">
                <div className="col-3">
                    <h1 class="h3 mb-5">
                        <strong>Listes des </strong> seances
                    </h1>
                </div>
                <div className="offset-7 col-2">
                    <ButtonPrimary route="/admin/programme/create">
                        Ajouter
                    </ButtonPrimary>
                </div>
            </div>
            <Card body className="offset-1">
            <div class="card-header">
									<h5 class="card-title">Utilisateurs</h5>
									
								</div>
                <Table striped>
                    <thead>
                        <tr>
                        <th className='text-center'>Nom complet</th>
                            <th className='text-center'>email</th>
                            <th className='text-center'>Role</th>
                            <th className='text-center'>Genre</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">Dimanche Namountougou</td>
                            <td className="text-center">dimanchenamo@gmail.com</td>
                            <td className="text-center">Formateur</td>
                            <td className="text-center">Homme</td>
                            <td className="text-center">
                            <ButtonPrimary>Modifier</ButtonPrimary> {" "}
                                <ButtonPrimary>Supprimer</ButtonPrimary>
                            </td>
                           
                        </tr>
                        <tr>
                            <td className="text-center">Dimanche Namountougou</td>
                            <td className="text-center">dimanchenamo@gmail.com</td>
                            <td className="text-center">Formateur</td>
                            <td className="text-center">Homme</td>
                            <td className="text-center">
                            <ButtonPrimary>Modifier</ButtonPrimary> {" "}
                                <ButtonPrimary>Supprimer</ButtonPrimary>
                            </td>
                           
                        </tr>
                        <tr>
                            <td className="text-center">Dimanche Namountougou</td>
                            <td className="text-center">dimanchenamo@gmail.com</td>
                            <td className="text-center">Formateur</td>
                            <td className="text-center">Homme</td>
                            <td className="text-center">
                            <ButtonPrimary>Modifier</ButtonPrimary> {" "}
                                <ButtonPrimary>Supprimer</ButtonPrimary>
                            </td>
                           
                        </tr>
                        <tr>
                            <td className="text-center">Dimanche Namountougou</td>
                            <td className="text-center">dimanchenamo@gmail.com</td>
                            <td className="text-center">Formateur</td>
                            <td className="text-center">Homme</td>
                            <td className="text-center">
                            <ButtonPrimary>Modifier</ButtonPrimary> {" "}
                                <ButtonPrimary>Supprimer</ButtonPrimary>
                            </td>
                           
                        </tr>
                       
                    </tbody>
                </Table>
            </Card>
        </>
    );
}
 
export default AllUser;