import Item from "../Item/Item"

const ItemList = ( {items} ) => {

    return(
        <div>
            <h2>Productos</h2>
            <hr/>

            <div className="flex flex-wrap -mx-2">
                {items.map((producto) => <Item key={producto.id} item={producto}/>)}
            </div>
        </div>
    )
}

export default ItemList