import ContainerBackOffice from "../components/container/ContainerBackOffice";

  
  const AdminLayout = ( { children }) => {

    return (
        <>
          <ContainerBackOffice>
              {children}
          </ContainerBackOffice>
        </>
    );
  };
  
  export default AdminLayout;