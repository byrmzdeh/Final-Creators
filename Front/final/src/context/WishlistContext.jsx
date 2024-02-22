import { createContext } from "react";
import UseLocal from "../hook/UseLocal";

export const WishlistContext = createContext()


function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = UseLocal('wishlist' , [])

    function addWishlist(item) {
        const index = wishlist.findIndex((x) => x._id === item._id)
        if (index === -1) {
            return setWishlist([...wishlist, item])
        } else {
            setWishlist(wishlist.filter((x) => x._id !== item._id))
        }
    }


    function checkWishlist(item) {
        const index = wishlist.findIndex((x) => x._id === item._id)
        if (index !== -1) {
            return true
        }
        return false
    }

    const data = { wishlist, addWishlist, checkWishlist }

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )

}

export default WishlistProvider
