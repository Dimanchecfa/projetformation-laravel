import { Warning } from "postcss";
import { Card, Table } from "react-bootstrap";
import { ButtonPrimary } from "../../../../components/button";

const AllSession = () => {
    return (
        <>
            <Card body className="offset-1">
            <div class="card-header">
									<h5 class="card-title">Seances</h5>
									
								</div>
               <Table striped>
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Session</th>
                            <th className="text-center">Formation</th>
                            <th className="text-center">Programme</th>
                            <th className="text-center">
                                Lieu
                            </th>
                            <th className="text-center">
                                Date 
                            </th>
                            <th className="text-center">
                                Heure
                            </th>

                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">Session 1</td>
                            <td className="text-center">Formation 1</td>
                            <td className="text-center">Programme 1</td>
                            <td className="text-center">
                                Lieu 1
                            </td>
                            <td className="text-center">
                                12/12/2021
                            </td>
                            <td className="text-center">
                                12h
                            </td>
                            <td className="text-center">
                                <ButtonPrimary>Modifier</ButtonPrimary> {" "}
                                <ButtonPrimary>Supprimer</ButtonPrimary>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">Session 1</td>
                            <td className="text-center">Formation 1</td>
                            <td className="text-center">Programme 1</td>
                            <td className="text-center">
                                Lieu 1
                            </td>
                            <td className="text-center">
                                12/12/2021
                            </td>
                            <td className="text-center">
                                12h
                            </td>
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
};

export default AllSession;
