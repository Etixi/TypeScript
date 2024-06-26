/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the license file for more information.
 */

import { ReactNode } from "react";
import { render } from "react-dom";

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T extends {}>({ items, render} : ListProps<T>) => {
    return (

        <ul>
            {items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}

export default List