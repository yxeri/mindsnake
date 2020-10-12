import React, { useState } from "react";

import "./AddItem.scss";

interface AddItemProps {
    onSubmit: Function,
}

export default function AddItem({ onSubmit }: AddItemProps) {
    const [text, setText] = useState('');

    function submit() {
        if (text !== '') {
            onSubmit({
                text,
                id: Date.now().toString(),
                done: false
            });
            setText('');
        }
    }

    return (
        <div className="add-item">
            <input
                value={text}
                type="text"
                onChange={(event) => setText(event.target.value)}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        submit()
                    }
                } }
            />
            <button
                type="submit"
                onClick={submit}
                className="add-button"
            >
                Add
            </button>
        </div>
    );
}
