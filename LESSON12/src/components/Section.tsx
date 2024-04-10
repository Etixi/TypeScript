/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */

import React, { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({ children, title = "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

