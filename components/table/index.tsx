'use client'

import { FC, useContext } from "react"
import { Theme, ThemeContext, ThemedStyleObject } from "@/theme"
import doNotForwardProps from "@/utils/doNotForwardProps"
import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { DataGrid as MUIDataGrid, GridColDef, DataGridProps } from "@mui/x-data-grid"
import Text from "../Text"

type Props = {
    rows: Array<{}>
    columns: GridColDef<{}>[]
    itemsPerPage: number
}

type StyledGridProps = { appTheme: Theme } & DataGridProps

const themedStyles: ThemedStyleObject = {
    dark: {
        backgroundColor: 'white'
    }
}

const DataGrid = styled(MUIDataGrid, doNotForwardProps('appTheme'))<StyledGridProps>(props => themedStyles[props.appTheme])

const CustomNoRowsOverlay: FC<{}> = () => (<Box display='flex' justifyContent='center' alignItems='center' minHeight='100%'>
    <Text
        textColorOverride={{
            dark: { color: 'black' }
        }}
    >
        Sin resultados 🙁
    </Text>
</Box>)

const Table: FC<Props> = ({rows, columns, itemsPerPage}) => {

    const { appTheme } = useContext(ThemeContext)

    return (
        <Box sx={{height: 600, width: '100%'}}>
            <DataGrid
                appTheme={appTheme}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: itemsPerPage,
                        },
                    },
                }}
                pageSizeOptions={[itemsPerPage, 50, 100]}
                disableRowSelectionOnClick
                slots={{
                    noRowsOverlay: CustomNoRowsOverlay
                }}
                slotProps={{
                    pagination: {
                        labelRowsPerPage: 'Filas por página'
                    }
                }}
            />
        </Box>
    )
}

export default Table