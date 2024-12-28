import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Add} from "./pages/Add.tsx";
import {Update} from "./pages/Update.tsx";
import {Delete} from "./pages/Delete.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {ItemProvider} from "./store/ItemProvider.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {path: "/", element: <Dashboard/>},
                {path: "/add", element: <Add/>},
                {path: "/update", element: <Update/>},
                {path: "/delete", element: <Delete/>}
            ]
        },
        {path: "*", element: <Error/>}
    ])

    return (
        <>
            <CustomerProvider>
                <ItemProvider>
                    <RouterProvider router={routes}></RouterProvider>
                </ItemProvider>
            </CustomerProvider>
        </>
    )
}

export default App