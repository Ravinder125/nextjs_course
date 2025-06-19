// import { FaHome } from 'react-icons/fa';

import UserCard from "@/components/UserCard";
import Link from "next/link";

const Users = async () => {

    const URL = "https://jsonplaceholder.org/users"

    const res = await fetch(URL);
    const data = await res.json()

    return (
        <div className="mt-8 p-5">
            <div>
                <div className="grid grid-cols-3 gap-5 ">
                    {data?.map((user) => (
                        <UserCard
                            key={user.id}
                            firstname={user.firstname}
                            lastname={user.lastname}
                            email={user.email}
                            username={user.login.username}
                            suite={user.address.suite}
                            street={user.address.street}
                            zipcode={user.address.zipcode}
                            city={user.address.city}
                            companyName={user.company.name}
                            companyBs={user.company.bs}
                            companyPhrase={user.company.catchPhrase}
                            phone={user.phone}
                            website={user.website}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Users