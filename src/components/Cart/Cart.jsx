import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import React from "react";
import Swal from "sweetalert2";
import { createOrder } from "../../services/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormCheckout } from "./FormCheckout";

const Cart = () => {
  const { setCart, cart, precioTotal } = useContext(cartContext);
  const [orderId, setOrderId] = useState();
  const [totalItems, setTotalItems] = useState(0);

  function HandleDeleteCart() {
    Swal.fire({
      title: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      reverseButtons: false,
    }).then((result) => {
      if (result.isConfirmed) {
        emptyCart();
        Swal.fire("Carrito borrado con exito");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  function handleCheckout(evt, userData) {
    evt.preventDefault();
    const items = cart.map(({ id, precio, nombre, count }) => ({
      id,
      precio,
      nombre,
      count,
    }));

    const order = {
      buyer: userData,
      items: items,
      total: precioTotal,
      date: new Date(),
    };

    Swal.fire({
      title: "¿Proceder con la compra?",
      html: `<p class="parrafo_compra">El total a pagar es $${precioTotal}</p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Finalizar compra",
      cancelButtonText: "Seguir comprando",
      reverseButtons: false,
    }).then((result) => {
      if (result.isConfirmed) {
        createOrder(order);
        Swal.fire(
          "Gracias por tu compra!",
          emptyCart(),
          console.log(totalItems)
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  function emptyCart() {
    setCart([]);
    setTotalItems(0);
  }

  if (orderId)
    return (
      <div>
        <h1>Gracias por tu compra</h1>
        <p>El id de tu compra {orderId}</p>,
      </div>
    );

  return (
    <section className="cartSection">
      <div className="product_container">
        {cart.map((item) => {
          return (
              <CartItem
                id={item.id}
                img={item.img}
                title={item.nombre}
                desc={item.desc}
                price={item.precio}
                quantity={item.count}
              />
          );
        })}
          {cart.length <= 0 ? null : <span>Subtotal ${precioTotal}</span>}
            </div>
      {cart.length <= 0 ? (
        <p>
          Tu carrito esta vacio, busca tus productos en{" "}
          <Link to="/">inicio</Link>
        </p>
      ) : (
        <>
        <div className="totalPrice_button">
          <Button onClick={HandleDeleteCart}>Vaciar carrito</Button>
        </div>
          <div className="form_container">
            <FormCheckout onCheckout={handleCheckout} />
          </div>
        </>
      )}
      </section>
  );
};

export default Cart;
