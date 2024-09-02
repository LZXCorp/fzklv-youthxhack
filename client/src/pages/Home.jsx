import React from 'react'
import Text from '../components/Text'

function Home() {
    return (
        <>
            <div>
                <Navbar />
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
            </div>
        </>
    )
}

export default Home
