import './App.css';
import images from './assets/images';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <section className="section-hero">
            <div className="container">
              <div className="section-hero-container">
                <h2 className="section-hero-title">Lorem ipsum dolor sit asmet?</h2>
                <p className="section-hero-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                </p>
              </div>
            </div>
          </section>
          <section className="section-paragraph">
            <div className="container">
              <div className="section-paragraph-container">
                <Paragraph
                  title="Lorem ipsum dolor sit amet"
                  image={{
                    url: images.htmlIcon,
                    alt: 'html'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                </Paragraph>
                <Paragraph
                  title="Lorem ipsum dolor sit amet"
                  image={{
                    url: images.cssIcon,
                    alt: 'css'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                </Paragraph>
                <Paragraph
                  title="Lorem ipsum dolor sit amet"
                  image={{
                    url: images.urlIcon,
                    alt: 'url'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                </Paragraph>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer-container">
              <span className="copyright">
                Copyright © 2021
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
