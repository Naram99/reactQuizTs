import NavigationBar from "./NavigationBar";

export default function Header(): JSX.Element {
    return (
        <header className="main-header">
            <div className="navbar-ct">
                <NavigationBar />
            </div>
        </header>
    );
}
