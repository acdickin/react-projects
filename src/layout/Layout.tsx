import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
const Layout = ({ children }) => {
    const { pathname } = useLocation();
    console.log("path:", pathname)
    return (
        <>
            {pathname == "/" ? null : <Header />}
            {children}
        </>
    );
};
export default Layout;