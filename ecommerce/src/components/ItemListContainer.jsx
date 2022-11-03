import { ItemProduct } from './ItemProduct';

export function ItemListContainer() {
    return (
        <main>
            <section className="ultima-visita">
                <h2 className="titulares">Catálogo de Productos</h2>
                <div className="contenedor-articulo">
                    
                    <ItemProduct imagenDeProducto="../img/img-macbook-pro-2019.jpg" 
                    precio="$230.000" descuento="20%" title="MacBook Pro 2019" categoria="Computadoras"
                    descripcion="Lorem Ipsum"/> 
                    
                    <ItemProduct imagenDeProducto="../img/img-macbook-pro-2019.jpg" 
                    precio="$250.000" descuento="10%" title="MacBook Pro 2020" categoria="Computadoras"
                    descripcion="Lorem Ipsum"/>
                    
                    <ItemProduct imagenDeProducto="../img/img-macbook-pro-2019.jpg" 
                    precio="$350.000" descuento="15%" title="MacBook Pro 2022" categoria="Computadoras"
                    descripcion="Lorem Ipsum"/>
                    
                    <ItemProduct imagenDeProducto="../img/img-macbook-pro-2019.jpg" 
                    precio="$280.000" descuento="25%" title="MacBook Pro 2021" categoria="Computadoras"
                    descripcion="Lorem Ipsum"/>
                    
                    <ItemProduct imagenDeProducto="../img/audifono-de-pc.png" 
                    precio="$55.00" descuento="15%" title="Audífonos VSG" categoria="Accesorios"/>

                    <ItemProduct imagenDeProducto="../img/audifono-de-pc.png" 
                    precio="$45.00" descuento="20%" title="Audífonos VSG" categoria="Accesorios"
                    descripcion="Lorem Ipsum"/>

                    <ItemProduct imagenDeProducto="../img/audifono-de-pc.png" 
                    precio="$35.00" descuento="25%" title="Audífonos VSG" categoria="Accesorios"
                    descripcion="Lorem Ipsum"/>

                    <ItemProduct imagenDeProducto="../img/audifono-de-pc.png" 
                    precio="$50.00" descuento="10%" title="Audífonos VSG" categoria="Accesorios"
                    descripcion="Lorem Ipsum"/>

                    <ItemProduct imagenDeProducto="../img/mouse-gamer-vsg-cyborg.jpg" 
                    precio="$25.00" descuento="15%" title="Mouse VSG" categoria="Periféricos"
                    descripcion="Lorem Ipsum"/>

                    <ItemProduct imagenDeProducto="../img/mouse-gamer-vsg-cyborg.jpg" 
                    precio="$35.00" descuento="20%" title="Mouse VSG" categoria="Periféricos"
                    descripcion="Lorem Ipsum"/>

                    <ItemProduct imagenDeProducto="../img/mouse-gamer-vsg-cyborg.jpg" 
                    precio="$55.00" descuento="35%" title="Mouse VSG" categoria="Periféricos"
                    descripcion="Lorem Ipsum"/>

                    <ItemProduct imagenDeProducto="../img/mouse-gamer-vsg-cyborg.jpg" 
                    precio="$45.00" descuento="25%" title="Mouse VSG" categoria="Periféricos"
                    descripcion="Lorem Ipsum"/>

                </div>
            </section>
        </main>
    )
}