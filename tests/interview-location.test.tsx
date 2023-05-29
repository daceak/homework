// @ts-ignore
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InterviewLocation from '../src/components/InterviewLocation';
import AddInterviewLocationButton from '../src/components/AddInterviewLocationButton';

describe('Interview location', () => {
  test('AddInterviewLocationButton renders correctly', () => {
    const setAddingLocation = jest.fn();
    render(
      <AddInterviewLocationButton
        addingLocation={false}
        setAddingLocation={setAddingLocation}
      />
    );
    const button = screen.getByText('Add interview location');
    expect(button).toBeTruthy();
  });

  test('calls setAddingLocation when button is clicked', () => {
    const setAddingLocation = jest.fn();
    render(
      <AddInterviewLocationButton
        addingLocation={false}
        setAddingLocation={setAddingLocation}
      />
    );

    const addButton = screen.getByText('Add interview location');
    fireEvent.click(addButton);

    expect(setAddingLocation).toHaveBeenCalledTimes(1);
  });

  test('InterviewLocation renders correctly', () => {
    const setAddingLocation = jest.fn();
    render(
      <InterviewLocation
        addingLocation={false}
        setAddingLocation={setAddingLocation}
      />
    );
    const combobox = screen.getByPlaceholderText('Select address');
    expect(combobox).toBeTruthy();
  });

  test('Alerts when saving address', () => {
    const setAddingLocation = jest.fn();
    window.alert = jest.fn();

    render(
      <InterviewLocation
        addingLocation={false}
        setAddingLocation={setAddingLocation}
      />
    );

    const input = screen.getByPlaceholderText('Add new address') as HTMLInputElement;
    const saveButton = screen.getByText('Save');
    expect(input).toBeTruthy();
    expect(saveButton).toBeTruthy();

    // No value provided
    fireEvent.click(saveButton);
    expect(window.alert).toHaveBeenCalledWith('No address provided');


    // Value provided
    fireEvent.change(input, { target: { value: 'Test Address' } });
    expect(input.value).toBe('Test Address');
  });
});
