import { Button } from "./components/Button";
import { PlusIcon } from "./icons/Plusicon";
import { ShareIcone } from "./icons/ShareIcon";

const App = () => {
  return (
    <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon />}></Button>
      <Button variant="secondary" text="Share brain" startIcon={<ShareIcone />}></Button>
      </div>
  )
}

export default App;