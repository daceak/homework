import { useState } from 'react';
import { Panel, PanelBody, PanelHeading } from '@vismaux/react-vud';
import '@vismaux/vud-icons/dist/css/vud-icons.min.css';

import './App.css';
import AddInterviewLocationButton from './components/AddInterviewLocationButton';
import InterviewLocation from './components/InterviewLocation';


function App() {
  const [addingLocation, setAddingLocation] = useState<boolean>(false);
  return (
    <Panel>
      <PanelHeading>Interview location</PanelHeading>
      <PanelBody>
        <AddInterviewLocationButton addingLocation={addingLocation} setAddingLocation={() => setAddingLocation(!addingLocation)} />
        {addingLocation &&
          <InterviewLocation addingLocation={addingLocation} setAddingLocation={() => setAddingLocation(!addingLocation)} />}
      </PanelBody>
    </Panel>
  )
}

export default App
