import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const {user}= useAuth()
    
    return (
        <div>
         <h2 className="text-3xl text-center font-bold">Hi,Welcome   {
                user.displayName? user.displayName:'back'
            } </h2>
           
        </div>
    );
};

export default AdminHome;