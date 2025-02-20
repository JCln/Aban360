import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { GridExpandMoreIcon } from '@mui/x-data-grid'
import React, { FC } from 'react'

interface AccordionProps {
    title: string
    content: any
}
const AccordionComponent: FC<AccordionProps> = ({ title, content }) => {
    return (
        <Accordion className='border border-gray my-2' >
            <AccordionSummary
                expandIcon={<GridExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                {content}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionComponent