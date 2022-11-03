import { FaTruck } from "react-icons/fa";

export function ItemProduct(props) {
    return (
        <article class="articulo-venta">
            <img className="img-producto" src={props.imagenDeProducto} width="100%" alt={props.title} />
            <div className="info-producto">
                <i><FaTruck/></i>
                <div className="precio">
                    <div className="precios">{props.precio}</div>
                </div>
                <div className="descuento">
                    <div className="descuentos">{props.descuento} off</div>
                </div>
                <h5>{props.title}</h5>
                <p className="descripciones">Categoría: {props.categoria}</p>
            </div>
        </article>
    )
}