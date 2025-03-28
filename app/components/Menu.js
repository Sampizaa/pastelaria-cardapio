import PastelItem from "./PastelItem";

const pasteis = [
    { nome: "Carne", imagem: "/pastel.png", preco: "10,00", esgotado: false },
    { nome: "Pizza", imagem: "/pastel.png", preco: "10,00", esgotado: true },
    { nome: "Carne", imagem: "/pastel.png", preco: "10,00", esgotado: false },
    { nome: "Pizza", imagem: "/pastel.png", preco: "10,00", esgotado: true },
    { nome: "Carne", imagem: "/pastel.png", preco: "10,00", esgotado: false },
    { nome: "Pizza", imagem: "/pastel.png", preco: "10,00", esgotado: true },
    { nome: "Carne", imagem: "/pastel.png", preco: "10,00", esgotado: false },
    { nome: "Pizza", imagem: "/pastel.png", preco: "10,00", esgotado: true },
];

export default function Menu() {
    return (
        <div className="menu">
            <div className="menu-grid">
                {pasteis.map((pastel, index) => (
                    <PastelItem key={index} {...pastel} />
                ))}
            </div>
        </div>
    );
}
