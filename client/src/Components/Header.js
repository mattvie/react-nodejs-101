export default function Header() {
    return (
        <header className="App-header">
            <a href="/" className="App-logo">Logo</a>

            <nav>
                <a href="/get">GET</a>
                <a href="/post">POST</a>
                <a href="/put">PUT</a>
                <a href="/delete">DELETE</a>
            </nav>
        </header>
    );
}