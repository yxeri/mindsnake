import React from "react";
import { Task } from "../../../interfaces";

import Trash from './trash.svg';
import "./Item.scss";

interface ItemProps {
    item: Task,
    onRemove: Function,
    onDone: Function,
}

export default function Item({ item, onDone, onRemove }: ItemProps) {
    return (
        <li>
            <input
                checked={item.done}
                type="checkbox"
                onChange={(event) => onDone(item.id, event.target.checked)}
            />
            <p className={item.done ? 'done' : ''}>
                {item.text}
            </p>
            <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="remove"
            >
                <img src={Trash} alt="Remove" />
            </button>
        </li>
    );
}
