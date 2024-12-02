import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-300 fixed top-0 left-0 bg-opacity-80 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <div className="flex justify-end">
              <button onClick={onClose} className="p-2">
                <CrossIcon />
              </button>
            </div>
            <div className="flex flex-col gap-4">
            <Input placeholder={"title"} />
            <Input placeholder={"link"}  />
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function Input({onchange, placeholder}: {onchange: () => void}) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2" onChange={onchange}/>
    </div>
}

