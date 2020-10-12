import React from "react";
import { Task } from "../../interfaces";
import Item from "./Item/Item";

import "./List.scss";

interface ListProps {
    items: Task[],
    onRemove: Function,
    onDone: Function,
}

export default function List({ items, onRemove, onDone }: ListProps) {
    return (
        <ul className="tasks-list">
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onRemove={onRemove}
                    onDone={onDone}
                />
            ))}
        </ul>
    );
}
