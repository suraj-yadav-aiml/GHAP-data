import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          {/* Fixed accessibility warning */}
          <img src={logo} alt="N8N and GitHub Logo" />
        </div>
        <h1>Learn GitHub Actions & n8n</h1>
      </header>
      
      {/* Semantic HTML wrapper */}
      <main>
        <MainContent />
      </main>
    </>
  );
}

export default App;
