import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tasks from './Tasks';
import {addTask, getTasks, removeTask} from "../StorageManager";

describe('Tasks', () => {
    const testData = [{
        id: Date.now().toString(),
        text: 'Test',
        done: false,
    }, {
        id: Date.now().toString(),
        text: 'Test 2',
        done: true,
    }];

    test('add starting tasks', () => {
        testData.forEach((object) => addTask(object));
    });

    test('render tasks', () => {
        const { baseElement } = render(<Tasks />);
        const list = baseElement.querySelector('.tasks-list');

        expect(list).toBeDefined();

        if (list) {
            expect(list.children).toHaveLength(Array.from(getTasks().values()).length);
        }
    });

    test('remove task', () => {
        const { baseElement } = render(<Tasks />);
        const list = baseElement.querySelector('.tasks-list');

        expect(list).toBeDefined();

        if (list) {
            const removeButton = list.children[0].querySelector('.remove');

            expect(removeButton).toBeDefined();

            if (removeButton) {
                const prevLength = list.children.length;

                fireEvent.click(removeButton);

                expect(list.children).toHaveLength(Array.from(getTasks().values()).length);
                expect(Array.from(getTasks().values())).toHaveLength(prevLength - 1);
            }
        }
    });

    test('fail to add empty task', () => {
        const { baseElement } = render(<Tasks />);
        const addItem = baseElement.querySelector('.add-item');

        expect(addItem).toBeDefined();

        if (addItem) {
            const submitButton = addItem.querySelector('.add-button');

            expect(submitButton).toBeDefined();

            if (submitButton) {
                const length = Array.from(getTasks().values()).length;

                fireEvent.click(submitButton);

                expect(Array.from(getTasks().values())).toHaveLength(length);
            }
        }
    });
});
