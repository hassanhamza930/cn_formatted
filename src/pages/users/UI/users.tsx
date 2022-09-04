import { useEffect } from "react"
import { useRecoilState } from "recoil";
import { User } from "../../../interfaces/users/user";
import usersState from "../../../recoil/users/users";
import UserComponent from "../Components/user";
import GetUsersFromFirebase from "../Logic/getUsersFromFirebase";


export default function Users() {
    const [users, setUsers] = useRecoilState(usersState);

    useEffect(() => {
        GetUsersFromFirebase(users, setUsers);
    }, [])

    return (
        <div className="bg-red-500 h-screen w-full">
            <div className="h-full overflow-y-scroll flex flex-col justify-start items-start">
                {
                    users.map((user: User) => {
                        return (
                            <UserComponent {...user} />
                        )
                    })
                }
            </div>
        </div>
    )
}