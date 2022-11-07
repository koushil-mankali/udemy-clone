import { useState } from "react";

import css from "./Cart.module.css";

import Navbar from "../../components/Navbar1/Navbar";
import Footer from "../../components/Footer/Footer";
import Button1 from "../../utils/Buttons/Button1/Button1";
import InputUtil from "../../utils/FormUtils/InputUtil/InputUtil";

import crossIcon from "/icons/close.png";

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");

  let clearCouponHandler = () => {
    setAppliedCoupon("");
  };

  let setCouponHandler = (e) => {
    setCoupon(e.target.value);
  };

  let submitCoupon = () => {
    setAppliedCoupon(coupon);
    console.log(coupon, "coupon");
  };

  return (
    <>
      <Navbar />
      <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <div className={css.ttl}>Shopping Cart</div>
          <div className={css.boxs}>
            <div className={css.box1}>
              <div className={css.cnt}>1 Course in Cart</div>
            </div>
            <div className={css.box2}>
              <div className={css.totalTxt}>Total:</div>
              <div className={css.currrency}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(600)}
              </div>
              <div className={css.totalDiscount}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(3399)}
              </div>
              <div className={css.ttlDisPer}>81% off</div>
              <Button1
                txt="Checkout"
                bck="var(--purple)"
                hovBck="var(--purple-dark)"
                extraCss={{
                  width: "100%",
                  margin: "1rem 0",
                  padding: "1rem",
                  border: "none",
                  color: "var(--white)",
                }}
              />
              <div className={css.ctxt}>Coupon code</div>
              {appliedCoupon ? (
                <div className={css.cpnBox}>
                  <img
                    src={crossIcon}
                    alt="close icon"
                    className={css.icon}
                    onClick={clearCouponHandler}
                  />
                  <div className={css.cpnCode}>
                    <b>{appliedCoupon}</b> is applied
                  </div>
                </div>
              ) : (
                ""
              )}
              <InputUtil
                type="text"
                btnTxt="Apply"
                onChange={setCouponHandler}
                btnClick={submitCoupon}
                extraCss={{ padding: "0.5rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;