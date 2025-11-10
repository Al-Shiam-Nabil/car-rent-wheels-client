import React, { useEffect, useState } from "react";

const UpdateCarPage = ({ updateModalRef ,id}) => {
    const [loading,setLoading]=useState(true)
   

    useEffect(()=>{
        fetch(`http://localhost:3000/cars/${id}`).then(res=>res.json()).then(data=>{
            console.log(data)
            setLoading(false)
        })
    },[])

     if(loading){
        return
    }
   
  return (
    <>
      <dialog ref={updateModalRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateCarPage;
