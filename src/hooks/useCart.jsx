import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';
const useCart = () => {
    const { user } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://bangali-ranna.vercel.app/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;