import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children})=>{

    const [productoCarList, setProductoCarList] = useState([]);

    const existeEnElCarrito = (id)=>{
        const elementoExistente = productoCarList.some((elemento)=>elemento.id === id);
        return elementoExistente;
    }

    const agregarAlCarrito = (producto, qty)=>{
        const newList = [...productoCarList];

        if(existeEnElCarrito(producto.id)){
            const productoIndex = productoCarList.findIndex(element=>element.id===producto.id);

            newList[productoIndex].quantity = newList[productoIndex].quantity + qty;

            newList[productoIndex].totalPrecio = newList[productoIndex].quantity * newList[productoIndex].precio;

            setProductoCarList(newList)

        } else{
            const newProducto={...producto, quantity:qty, totalPrecio: qty*producto.precio}
            const newList = [...productoCarList];
            newList.push(newProducto);
            setProductoCarList(newList);
        }
    }

    const eliminarProducto = (idProducto)=>{
        const copiaArray = [...productoCarList];
        const newArray = copiaArray.filter(elm=>elm.id !== idProducto);
        setProductoCarList(newArray);
    }

    const vaciarCarrito=()=>{
        setProductoCarList([])
    }

    const totalProductos = ()=>{
        const totalProductos = productoCarList.reduce((acc,item)=>acc + item.quantity,0);
        return totalProductos;
    }

    return(
        <CartContext.Provider value={{productoCarList,
                                    agregarAlCarrito, 
                                    eliminarProducto, 
                                    vaciarCarrito, 
                                    existeEnElCarrito, totalProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider