import { FaTruck } from "react-icons/fa";

export function ItemDetailContainer(props) {
    return (
        <article class="articulo-venta">
            <div className="d-inline-block w-50">
                <img className="img-producto" src="../img/img-macbook-pro-2019.jpg" width="100%" alt="imagen de MacBook" />
            </div>
            <div className="info-producto d-inline-block w-50">
                <i><FaTruck/></i>
                <h5>{props.title}</h5>
                <div className="precio">
                    <div className="precios">{props.precio}</div>
                </div>
                <div className="descuento">
                    <div className="descuentos">{props.descuento} off</div>
                </div>
                <p>{props.descripcion}</p>
                <p className="descripciones">Categoría: {props.categoria}</p>
            </div>
        </article>
    )
}