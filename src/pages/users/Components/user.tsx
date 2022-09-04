import { User } from "../../../interfaces/users/user";

export default function UserComponent({ name, email, photoUrl, employmentList }: User) {
    return (
        <div className="h-min w-full bg-white/90 rounded-xl p-3 mt-3 w-96 flex justify-center items-center">
            <div className="overflow-x-hidden">
                User's name is {name},<br />
                User's email is {email},<br />
                User's photoUrl is {photoUrl},<br />
                User's First Employment is {employmentList==null || employmentList[0]==null ?"":employmentList[0].companyName},<br />
            </div>
        </div>
    )
}