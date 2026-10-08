import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./router-tree-gen"

const router = createRouter({ routeTree })

function App() {

  return <RouterProvider router={router} />
}

export default App