import './ItemListContainer.scss'

export const ItemListContainer = ( {greeting} ) => {

    return(
        <div className="containerList">
            <h2 className='h2__containerList'>{greeting}</h2>
            <hr></hr>
        </div>
    )
}