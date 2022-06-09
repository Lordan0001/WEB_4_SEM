import RowItem from './RowItem'

const RowList = ({ rows }) => {
    return (
        <tbody>
            {rows.map((row) => {
                return <RowItem cells={row} key={row.id} />
            })}
        </tbody>
    )
}

export default RowList
