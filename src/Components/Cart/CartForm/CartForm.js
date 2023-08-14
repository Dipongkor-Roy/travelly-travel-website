import React, { useContext } from "react";
import "./CartForm.css";
import { AuthContext } from "../../Contexts/UserContext";

const CartForm = ({ detailsHotel }) => {
  const { cost } = detailsHotel;
  const { user } = useContext(AuthContext);

  return (
    <div className="h-full  bg-base-200">
      <div className=" flex-col lg:flex-row-reverse">
        <div className="card shadow-2xl bg-base-100">
          <div className="card-body hevy">
            <div className="form-control">
              <div>
                <p className="text-2xl mb-2 font-semibold">Payment Details</p>
                <p className="my-3 text-sm font-thin">
                  Complete your purchase by providing your payment details
                </p>
              </div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder={user.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Card Details</span>
              </label>
              <input
                type="text"
                placeholder="Card Number   &    MM/YY  CVC"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Card Holder Name</span>
              </label>
              <input
                type="text"
                placeholder="Card Holder Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Billing Address</span>
              </label>
              <div className="collapse mb-2 bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-left text-sm font-normal">
                  <p className="flex items-center justify-between">
                    {" "}
                    United States{" "}
                    <span className="text-sm font-normal"> > </span>
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-sm">California</p>
                </div>
              </div>

              <div className="form-control">
              <label className="label">
                
              </label>
              <input
                type="text"
                placeholder="State"
                className="input input-bordered"
              />
            </div>
            </div>
            <span className="mt-3">
              <p>
                Subtotal: <span className="mx-2">{cost}</span>
              </p>
              <div className="my-1">
                <p>
                  VAT <span className="mx-1">( Included In Price ) : 0</span>
                </p>
              </div>
              <p className="font-semibold text-xl">
                Total : <span className="mx-2">{cost}</span>
              </p>
            </span>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-600 hover:bg-cyan-700 text-white rounded-sm">
                Pay <span>{cost}</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
