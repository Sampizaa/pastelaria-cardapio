import Menu from "./components/Menu";
import "./styles/globals.css";
import "./styles/menu.css";

export default function Home() {
    return (
        <div className="container">
            <div className="borda">
                <header className="header">
                    <h1>Pastelaria do Seu Zé</h1>
                    <img src="/logo.png" alt="logo" />
                </header>
            </div>
            <Menu />
        </div>
    );
}