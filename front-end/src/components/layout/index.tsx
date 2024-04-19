import { lazy } from "react"
const Main = lazy(() => import("./main"))
const Dashboard = lazy(() => import("./dashboard"))

interface ILayoutProps {
    variant: "main" | "dashboard"
}

export default ({variant}: ILayoutProps) => {
    switch(variant){
        case "main":
            return <Main/>
        case "dashboard":
            return <Dashboard/>
    }
}