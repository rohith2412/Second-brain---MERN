import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

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
            <Input placeholder={"title"} onchange={function (): void {
                throw new Error("Function not implemented.");
              } } />
            <Input placeholder={"link"} onchange={function (): void {
                throw new Error("Function not implemented.");
              } }  />
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="primary" text="Submit" startIcon={undefined} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
