import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function UserPage(): JSX.Element {
    return (
        <div className="user-page-wrapper">
            <Header />
            <MainContent />
        </div>
    );
}
