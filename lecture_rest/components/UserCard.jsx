import Link from "next/link"

const UserCard = ({
    firstname,
    lastname,
    email,
    username,
    suite,
    street,
    zipcode,
    city,
    companyName,
    companyBs,
    companyPhrase,
    phone,
    website
}) => {
    return (
        <div className="font-poppins tracking-wide bg-[#393e46] bg-[#ffffff] text-black p-5 rounded-md shadow-lg transition-all duration-300 transform hover:scale-110 ">
            <h1 className="text-2xl text-[#6b6a68] font-bold">
                {firstname} {" "} {lastname}
            </h1>

            <div className="mt-6 text-xs flex gap-1">
                <h3 className="">Email :</h3>
                <p className="text-slate-600">{email}</p>
            </div>

            <div className="text-xs flex gap-1">
                <h3>Username :</h3>
                <p className="text-slate-600">{username}</p>
            </div>


            <div className="mt-3">
                <h2 className="text-sm mb-1">Address :</h2>
                <p className="text-[11px] text-slate-600">
                    {suite} {" "}
                    {street} {" "}
                    {zipcode} {" "}
                    {city}
                </p>
            </div>

            <div className="mt-3">
                <h2 className="text-sm mb-1 ">Company :</h2>
                <div className="grid grid-cols-2 text-[11px] gap-x-2 gap-y-1">
                    <h3 className=" text-slate-600">Name : {companyName}</h3>
                    <h3 className=" text-slate-600">Business : {companyBs}</h3>
                    <p className="col-span-2 text-slate-600">CatchPhrase : {companyPhrase}</p>
                </div>
            </div>

            <p className="mt-3 text-xs text-slate-800">{phone}</p>
            <Link
                href={website}
                className="text-xs"
            >{website}</Link>
        </div>
    )
}

export default UserCard