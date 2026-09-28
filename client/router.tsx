import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function MainLayout() {
    return (
        <main>
            <Outlet />
        </main>
    );
}

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
            {
                path: "/about",
                element: <div>About</div>,
            },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
