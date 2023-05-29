import { FC } from "react";
import { Button, Icon } from "@vismaux/react-vud";

import { InterviewLocationProps } from "../types";

const AddInterviewLocationButton: FC<InterviewLocationProps> = ({ addingLocation, setAddingLocation }) => {
    return (
        <Button buttonStyle="link" onClick={() => setAddingLocation()} >
            <Icon name={addingLocation ? "remove-circle" : "add-circle"} size="sm" className={addingLocation ? "icon-error" : ""} />
            Add interview location
        </Button>
    );
};

export default AddInterviewLocationButton;
