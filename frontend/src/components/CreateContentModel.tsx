import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "./config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleref = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleref.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
    }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
  }
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-300 fixed top-0 left-0 bg-opacity-80 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <div className="flex justify-end ">
              <button onClick={onClose} className="p-2">
                <CrossIcon />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <Input reference={titleref} placeholder={"title"} />
              <Input reference={linkRef} placeholder={"link"} />
            </div>
            <div>
              <h1>Type</h1>
              <div className="flex justify-center gap-5">
                <Button
                  text="Youtube"
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Youtube);
                  }}
                ></Button>
                <Button
                  text="Twitter"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Twitter);
                  }}
                ></Button>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button
                onClick={addContent}
                variant="primary"
                text="Submit"
                startIcon={undefined}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
