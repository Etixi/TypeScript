/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the license file for more information.
 */

import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { UseCartContextType } from "../context/CartProvider";

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart