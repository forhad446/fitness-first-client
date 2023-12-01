import useAuth from "../../../../hook/useAuth";

const TrainerHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                <span className=" font-semibold">
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </span>
            </h2>
        </div>
    );
};

export default TrainerHome;