const protect=()=>
{   const user=localStorage.getItem('user');
    const token=localStorage.getItem('token');
    if(user==="admin"&&token)
    return true
    else    
    return false
}
export default protect;
