
const LowStockMsg = ({stock}) => {

    if(stock === 0){
        return(
            <p><strong>
                No quedan unidades :(
            </strong></p>
        )
    }

    return (
        <p><strong>
            {
                stock === 1 
                    ? `Queda sólo 1 unidad!`
                    : `Quedan sólo ${stock} unidades!`
            }
        </strong></p> 
    )
}

export default LowStockMsg