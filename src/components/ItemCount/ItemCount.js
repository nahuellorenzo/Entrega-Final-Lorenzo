
export const ItemCount = ( {max, cont, setCont, disabled, setDisabled, handleAgregar} ) => {

    const handleContador = () => {
        cont < max && setCont(cont + 1)
        if (Number (cont) === 1)
        {
            setDisabled(false)
        }
    }

    const hanldeRestar = () => {
        setCont ( cont - 1 )
        if (Number (cont) === 2)
        {
            setDisabled(true)
        }
    }

    return (
        <div>
            <div className="flex items-center justify-center mb-2">
                <button className="border border-solid border-black text-xl py-1 px-1 rounded" onClick={hanldeRestar} disabled={disabled}>-</button>
                <p className='text-xl'>{cont}</p>
                <button className="border border-solid border-black text-xl py-1 px-1 rounded" onClick={handleContador}>+</button>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleAgregar}>Agregar al carrito</button>
            </div>
        </div>
    )
}