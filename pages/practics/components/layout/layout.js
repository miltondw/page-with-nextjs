import Navbar from '../Navbar/Navbar'
export default function layout({children}) {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}
