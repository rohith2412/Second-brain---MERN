import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { CreateContentModel } from "../components/CreateContentModel";
import { PlusIcon } from "../icons/Plusicon";
import { ShareIcone } from "../icons/ShareIcon";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../components/config";

export const Dashboard = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  },[modelOpen])

  return (
    <div>
      <Sidebar />
      <div className="p-4 min-h-screen bg-gray-100 border-2">
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
          <Button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
              share: true
          }, {
            headers:{
              "Authorization": localStorage.getItem("token")
            }
          });
          const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
          alert(shareUrl);
          
          }}

            variant="secondary"
            text="Share brain"
            startIcon={<ShareIcone />}
          ></Button>
        </div>
        <div className="flex gap-4 w-screen mt-6 flex-wrap ">
          {contents.map(({type, link, title})=> <Card
            type={type}
            link={link}
            title={title}
          />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
