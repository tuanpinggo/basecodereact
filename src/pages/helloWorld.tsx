import DarkMode from "@/components/ui/darkMode"
import { ACReduxState } from "@/interfaces/reduxState"
import { useAppSelector } from "@/redux/hook"
import { useTranslation } from "react-i18next"

const HelloWorldPage = () => {
    
    const {t} = useTranslation()
    const globalState = useAppSelector((state: ACReduxState) => state.ac)

    return(
        <>
            {t("Hello world")}
            <div>{globalState}</div>
            <DarkMode />
        </>
    )
}

export default HelloWorldPage