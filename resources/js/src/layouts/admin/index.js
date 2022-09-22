import ContainerBackOffice from "../components/container/ContainerBackOffice";
import { menuAdmin } from "./menu";

  
  const AdminLayout = (props) => {

    return (
        <>
          <ContainerBackOffice {...props} menuElements={menuAdmin}/>
        </>
    );
  };

  export default AdminLayout;
  