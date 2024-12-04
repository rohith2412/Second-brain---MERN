import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { CreateContentModel } from "../components/CreateContentModel";
import { PlusIcon } from "../icons/Plusicon";
import { ShareIcone } from "../icons/ShareIcon";

export const Dashbord = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModel
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModelOpen(true);
            }}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          ></Button>
          <Button
            variant="secondary"
            text="Share brain"
            startIcon={<ShareIcone />}
          ></Button>
        </div>
        <div className="flex gap-4">
          <Card
            type="twitter"
            link="https://x.com/EndWokeness/status/1863593429382410694/photo/1"
            title="First tweet"
          />
          <Card
            type="youtube"
            link="https://youtu.be/-eDkV9yMBF0?si=d176Id5A3HmVxSyc"
            title="First video"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
