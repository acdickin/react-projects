import {useEffect,useState, memo} from 'react';
import type {UserData} from './UserData';
import {useDebounce} from './hooks/useDebounce';
import {useUserData} from './hooks/useUserData';
import { RingLoader } from 'react-spinners';

export const Users =()=>{
    
    const [query, setQuery] = useState<string>(''); 
    const debounced= useDebounce(query, 1000)
    const {isLoading,userData,setFilter}=useUserData(24);
    
    useEffect(()=>{
        setFilter(debounced);
    },[debounced])
   

    return (
        <div className="flex flex-col gap-6 items-center">
            <h1>Debounced User Search</h1>
            <input className="w-[50%]" type="text" placeholder="Type to search" value={query} onChange={((e)=>setQuery(e.target.value))}/>
            {isLoading &&<div className="flex justify-center py-12"> <RingLoader loading={true} size={400} color="#3b82f6" /></div> }
           {
           userData.length>0 && 
            <ul className="flex flex-wrap justify-between gap-6 list-none">
                {userData.map((user:UserData)=><UserCard key={user.id} user={user}/>)}
            </ul>
            }
        </div>
    )

};


const UserCard =memo( ({ user }: { user: UserData }) => {
    const {id, firstName, lastName, image, email, phone}=user;
    return(
    <li className="shadow-lg p-5 gap-3" key={id}>
        <img width="300px" src={image} alt={`${firstName} ${lastName} profile image`}/>
        <h2 className="my-0">{firstName} {lastName}</h2>
        <p className="my-0">{email}</p>
        <p className="my-0">{phone}</p>
    </li>
)
});