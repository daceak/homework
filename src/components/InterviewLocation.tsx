import { FC, useRef, useState } from "react";
import { Button, ComboboxSimple, InputField } from "@vismaux/react-vud";

import { InterviewLocationProps } from "../types";

const InterviewLocation: FC<InterviewLocationProps> = ({ setAddingLocation }) => {
    const inputAddress = useRef<HTMLInputElement>(null);

    const saveLocation = () => {
        const addressAdded = comboboxAddress || inputAddress.current?.value;
        alert(addressAdded ? `Interview address added: ${addressAdded}` : 'No address provided');
    }
    const [comboboxAddress, setComboboxAddress] = useState<string>();
    const locations = [
        { key: 1, text: 'PL11' },
        { key: 2, text: 'BG' },
        { key: 3, text: 'Online' },
    ];

    return (
        <div className='interview-address'>
            <div className='interview-inputs'>
                <ComboboxSimple
                options={locations}
                placeholder="Select address"
                dropdownAriaLabel="Expand dropdown"
                clearAriaLabel="Delete selection in input"
                onInputChange={(value) => setComboboxAddress(value)}
            />
            <InputField placeholder='Add new address' className='mt-6' onChange={() => undefined} ref={inputAddress} />
            </div>
            <div className='location-action-buttons'>
                <Button onClick={() => setAddingLocation()}>Cancel</Button>
                <Button buttonType='primary' onClick={() => saveLocation()}>Save</Button>
            </div>

        </div>
    );
};

export default InterviewLocation;
