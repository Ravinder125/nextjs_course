
const UserName = async (props) => {
    const { params } = await props;
    return (
        <div>
            this is the name : {params.username}
        </div>
    );
};

export default UserName;