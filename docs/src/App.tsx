import React, { useState } from 'react';
import * as Icons from 'pookie-react-icons';

// Filter out non-icon exports if any exist (like types)
const iconList = Object.keys(Icons).filter(key => key !== 'IconBase' && typeof (Icons as any)[key] === 'function');

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [copied, setCopied] = useState<string | null>(null);

    const filteredIcons = iconList.filter(name =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCopy = (name: string) => {
        const importTag = `import { ${name} } from 'pookie-react-icons';`;
        navigator.clipboard.writeText(importTag);
        setCopied(name);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="container">
            <header className="hero">
                <h1>Pookie Icons</h1>
                <p>A premium, lightweight React icon library.</p>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search icons..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            <main>
                <div className="icon-grid">
                    {filteredIcons.map((name) => {
                        const Icon = (Icons as any)[name];
                        return (
                            <div
                                key={name}
                                className="icon-card"
                                onClick={() => handleCopy(name)}
                                title="Click to copy import statement"
                            >
                                <Icon size={32} />
                                <span>{name}</span>
                                {copied === name && <div style={{ fontSize: '0.7rem', color: '#10b981', marginTop: '0.2rem' }}>Copied!</div>}
                            </div>
                        );
                    })}
                </div>

                {filteredIcons.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '2rem', color: 'rgba(255,255,255,0.4)' }}>
                        No icons found matching "{searchTerm}"
                    </div>
                )}
            </main>

            <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)', paddingBottom: '2rem' }}>
                Built with ❤️ by Pookieinterns
            </footer>
        </div>
    );
};

export default App;
