/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the license file for more information.
 */

import { ReactElement } from "react"

type HeadingProps = { title: string }

const Heading = ({ title }: HeadingProps): ReactElement => {
    return <h1>{title}</h1>
}

export default Heading