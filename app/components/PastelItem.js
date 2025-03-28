export default function PastelItem({ nome, imagem, preco, esgotado }) {
    return (
        <div className={`pastel-item ${esgotado ? "esgotado" : ""}`}>
            <h3 className={esgotado ? "riscado" : ""}>{nome}</h3>
            <img src={imagem} alt={nome} className={esgotado ? "img-esgotado" : ""}/>
            <p>R$ {preco}</p>
        </div>
    );
}