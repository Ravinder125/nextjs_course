
const UserName = async (props) => {
    const { params } = await props;
    console.log(params);
    return (
        <div>
            this is the name : {props.params.username}
        </div>
    );
};

export default UserName;