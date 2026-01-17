import React, { useState, useEffect } from 'react';
import * as Icons from 'pookie-react-icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Helper to get raw markdown files (using Vite's glob import)
const markdownFiles = import.meta.glob('./content/*.md', { as: 'raw', eager: true });

const iconList = Object.keys(Icons).filter(key => key !== 'IconBase' && typeof (Icons as any)[key] === 'function');

type Page = 'introduction' | 'installation' | 'usage' | 'customization' | 'icons';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('introduction');
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

    const renderMarkdown = (pageName: string) => {
        const path = `./content/${pageName}.md`;
        const content = markdownFiles[path] as string;
        return (
            <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        );
    };

    return (
        <div className="docs-layout">
            <aside className="sidebar">
                <div className="sidebar-logo">Pookie Icons</div>

                <nav className="nav-section">
                    <div className="nav-title">Getting Started</div>
                    <a className={`nav-link ${currentPage === 'introduction' ? 'active' : ''}`} onClick={() => setCurrentPage('introduction')}>Introduction</a>
                    <a className={`nav-link ${currentPage === 'installation' ? 'active' : ''}`} onClick={() => setCurrentPage('installation')}>Installation</a>
                    <a className={`nav-link ${currentPage === 'usage' ? 'active' : ''}`} onClick={() => setCurrentPage('usage')}>Usage</a>
                    <a className={`nav-link ${currentPage === 'customization' ? 'active' : ''}`} onClick={() => setCurrentPage('customization')}>Customization</a>
                </nav>

                <nav className="nav-section">
                    <div className="nav-title">Components</div>
                    <a className={`nav-link ${currentPage === 'icons' ? 'active' : ''}`} onClick={() => setCurrentPage('icons')}>Icon Gallery</a>
                </nav>
            </aside>

            <main className="main-content">
                {currentPage === 'icons' ? (
                    <div>
                        <h1>Icon Gallery</h1>
                        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Click an icon to copy its import statement.</p>

                        <input
                            type="text"
                            placeholder="Search icons..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <div className="icon-grid">
                            {filteredIcons.map((name) => {
                                const Icon = (Icons as any)[name];
                                return (
                                    <div key={name} className="icon-card" onClick={() => handleCopy(name)}>
                                        <Icon size={32} />
                                        <span>{name}</span>
                                        {copied === name && <div style={{ fontSize: '0.7rem', color: '#10b981', position: 'absolute', bottom: '10px' }}>Copied!</div>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    renderMarkdown(currentPage)
                )}
            </main>
        </div>
    );
};

export default App;
