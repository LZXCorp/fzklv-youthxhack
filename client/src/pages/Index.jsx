import Navbar from './Navbar'
import '../assets/index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
    return (
        <div>
            <Navbar />
<<<<<<< Updated upstream
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
=======
            <header>
                <h1 className="home">
                    <Text
                        english={'Linking you to everyone'}
                        chinese={'将您与每个人联系起来'}
                    />
                </h1>
                <p className="subtext">
                    <Text
                        english={'Come and join us in the upcoming event!'}
                        chinese={'来加入我们举行的活动吧！'}
                    />
                </p>
                <button className="event_button">
                    <Text english={'Events'} chinese={'活动'} />
                </button>
            </header>
            <hr />
            <main>
                <section className="about">
                    <h2>
                        <Text english={'About Us'} chinese={'关于我们'} />
                    </h2>
                    <p>
                        <Text
                            english={
                                'We are dedicated to creating an inclusive community where individuals with special needs and disabilities can access resources, share experiences, and build meaningful connections. Our platform prioritizes accessibility, ensuring everyone can participate fully and feel valued, understood, and empowered.'
                            }
                            chinese={
                                '我们致力于创建一个包容性的社区，为有特殊需求和残疾的个人提供资源、分享经验、建立有意义的联系。我们的平台优先考虑可访问性，确保每个人都能充分参与，感受到被重视、理解和赋权。'
                            }
                        />
                    </p>
                </section>

                <hr />

                <section className="contact">
                    <h2>
                        <Text english={'Contact Us'} chinese={'联系我们'} />
                    </h2>
                    <p>
                        <Text
                            english={
                                'Get in touch with us for more information.'
                            }
                            chinese={'与我们联系获取更多信息。'}
                        />
                    </p>
                    <button className="contact_button">
                        <Text english={'Contact'} chinese={'联系'} />
                    </button>
                </section>

                <hr />
            </main>
            <footer>
                <p>&copy; 2024 My Simple Home Page. All rights reserved.</p>
            </footer>
>>>>>>> Stashed changes
        </div>
    )
}

export default App
