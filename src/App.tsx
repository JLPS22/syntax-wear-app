import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./router-tree-gen"
import { CartProvider } from "./contexts/CartProvider"

const router = createRouter({ routeTree })

function App() {
  return (
    <CartProvider>
      <RouterProvider router = { router } />
    </CartProvider>
  )
}

export default App